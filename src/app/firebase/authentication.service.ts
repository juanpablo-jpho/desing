import { Injectable, inject } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, 
        signOut, authState, updateProfile, updateEmail,
        sendEmailVerification,
      reauthenticateWithCredential, 
      EmailAuthProvider, verifyBeforeUpdateEmail,
      updatePassword, sendPasswordResetEmail,
      deleteUser,
      signInWithRedirect,
      GoogleAuthProvider,
      OAuthProvider,
      FacebookAuthProvider,
      OAuthCredential,
      signInWithCredential,
      getRedirectResult,
    } from '@angular/fire/auth';
import { FirestoreService } from './firestore.service';
import { environment } from 'src/environments/environment';
import { Browser } from '@capacitor/browser';
import { Models } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  auth: Auth = inject(Auth);
  authState = authState(this.auth);
  firestoreService: FirestoreService = inject(FirestoreService);


  constructor() { 
    // this.logout();
    this.auth.languageCode = 'es';       
  }

  async createUser(email: string, password: string) {
    const user = await createUserWithEmailAndPassword(this.auth, email, password);
    await this.sendEmailVerification();
    return user;
  }

  getCurrentUser() {
      return this.auth.currentUser
  }

  updateProfile(data: {displayName?: string, photoURL?: string}) {
     return updateProfile(this.auth.currentUser, data)
  }

  updateEmail(email: string) {
    return updateEmail(this.auth.currentUser, email)
  }

  verifyBeforeUpdateEmail(email: string) {
    return verifyBeforeUpdateEmail(this.auth.currentUser, email)
  }

  reauthenticateWithCredential(password: string) {
    // const credential = EmailAuthProvider.credential(
    //   this.auth.currentUser.email,
    //   password
    // );
    const credential = GoogleAuthProvider.credential(null, password);
    return reauthenticateWithCredential(this.auth.currentUser, credential)
  }

  
  sendEmailVerification() {
    return sendEmailVerification(this.auth.currentUser)
  }

  updatePassword(newPasword: string) {
    return updatePassword(this.auth.currentUser, newPasword)
  }


  sendPasswordResetEmail(email: string) {
    return sendPasswordResetEmail(this.auth, email);
  }

  async login(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  async logout(reload = true) {
    // return signOut(this.auth);
    await signOut(this.auth);
    if (reload) {
      window.location.reload();
    }
  }

  deleteUser() {
    return deleteUser(this.auth.currentUser);
  }

  loginWithProvider(providerId: string) {
     let provider;
     if (providerId == 'google') {
        provider = new GoogleAuthProvider();
     }
     if (providerId == 'apple') {
      provider = new OAuthProvider('apple.com');
     }
     if (providerId == 'facebook') {
      provider = new FacebookAuthProvider();
     }
     if (provider) {
       signInWithRedirect(this.auth, provider)
     }
  }

  async getTokenOfProvider(providerId: string) {
    console.log('getTokenOfProvider -> ', providerId);
    return new Promise<string>( async (resolve) => { 
      try {
        const path = Models.Auth.PathIntentsLogin;
        const data: any = {
          provider: providerId,
          token: null
        }
        const id = await this.firestoreService.createDocument(path, data);
        const s = this.firestoreService.getDocumentChanges<any>(`${path}/${id}`).subscribe( async (response) => {
            if (response) {
                if (response.provider == providerId && response.token) {
                    console.log('login with token -> ', response);
                    Browser.close()
                    s.unsubscribe();
                    this.firestoreService.deleteDocument(`${path}/${id}`)
                    resolve(response.token);
                } 
            }
        });
        
        // const link = `http://localhost:8100/user/request-login?provider=${providerId}&intentId=${id}`;
        const link = `https://${environment.firebaseConfig.authDomain}/user/request-login?provider=${providerId}&intentId=${id}`;
        // console.log('link -> ', link);

        await Browser.open({ url: link });        
      } catch (error) {
        resolve(null);
      }
    })
    
  }

  async loginWithTokenOfProvider(providerId: string, token: string) {
      let credential: OAuthCredential;
      switch (providerId) {
        case 'google':
          credential = GoogleAuthProvider.credential(token)
          break;
        case 'apple':
          const OAuth = new OAuthProvider('apple.com');
          credential = OAuth.credential({idToken: token});
          break;
        case 'facebook':
          credential = FacebookAuthProvider.credential(token);
          break;
      }
      console.log('credentials -> ', credential);
      if (credential) {
        return await signInWithCredential(this.auth, credential);
      }
      return null;
  }

  getRedirectResult() {
    return getRedirectResult(this.auth) 
  }



}


const habilidades = [
  {
    nombre: "consulta_deuda",
    descripcion: `Utiliza esta habilidad cuando el usuario desea consultar su deuda,
    se puede consultar la deuda por cédula, ruc, cuenta contrato o número de medidor, solicita
    el usuario que te proporcione estos valores para poder realizar la consulta`,
    parametros: [
      {nombre: 'cedula_ruc', descripcion: 'Número de cédula del cliente, puede ser de 10 a 13 dígitos'},
      {nombre: 'cuenta_contrato', descripcion: 'Número de cuenta contrato del cliente, es de 12 dígitos'},
      {nombre: 'Número de medidor', descripcion: 'Número de medidor de cliente'}
    ]
  }
];

const messages = [
  { type: 'user', message: '¿Cual es mi deuda?'},
  { type: 'agent', message: 'Para poder consultar tu deuda, por favor proporcióname tu número de cédula'},
  { type: 'user', message: '0102030910'}
];

const request = { 
  promt: `Eres un asistente de la Centrosur, te llamas José luz, respondes siempre al cliente de forma amigable, 
  no respondas preguntas que no tengan que ver con los servicios que brinda la empresa.`,
  messages: [
    { type: 'user', message: '¿Cual es mi deuda?'},
    { type: 'agent', message: 'Para poder consultar tu deuda, por favor proporcióname tu número de cédula'},
    { type: 'user', message: '0102030910'},
    { type: 'system', message: 'Deuda 10'}
  ]
}






