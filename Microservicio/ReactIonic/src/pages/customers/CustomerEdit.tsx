import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import { add, checkmark, close, create, pencil, save } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { removeCustomer, saveCustomer, searchCustomerById, searchCustomers } from './CustomerApi';


const CustomerEdit: React.FC = () => {

    const { name,id } = useParams<{ name: string; id: string; }>();

    const [customer,setCustomer] = useState<any>({});
    const history = useHistory();

    useEffect(() =>{
      search();
    }, [,]);

    const search = () => {
        if (id !== 'new'){
            let result = searchCustomerById(id);
            setCustomer(result);
        }


    }



    

    const save = () => {
        saveCustomer(customer);
        history.push('/page/customers')
    }


    return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">{name}</IonTitle>
          </IonToolbar>
        </IonHeader>
      
      
        <IonCard>
            <IonTitle>{id === 'new' ? 'Agregar Cliente' : 'Editar Cliente'}</IonTitle>
            
            <IonRow>
                <IonCol>
                    <IonItem>
                        <IonLabel position="stacked">Nombre</IonLabel>
                        <IonInput onIonChange={e => customer.Firstname = e.detail.value}
                        value={customer.Firstname} > </IonInput>
                    </IonItem>
                </IonCol>

                <IonCol>
                    <IonItem>
                        <IonLabel position="stacked">Apellido</IonLabel>
                        <IonInput onIonChange={e => customer.Lastname = e.detail.value}
                        value={customer.Lastname} > </IonInput>
                    </IonItem>
                </IonCol>

                <IonCol>
                    <IonItem>
                        <IonLabel position="stacked">Email</IonLabel>
                        <IonInput onIonChange={e => customer.Email = e.detail.value}
                        value={customer.Email} > </IonInput>
                    </IonItem>
                </IonCol>
            </IonRow>

            <IonRow> 
                <IonCol>
                    <IonItem>
                        <IonLabel position="stacked">Direccion</IonLabel>
                        <IonInput onIonChange={e => customer.Address = e.detail.value}
                        value={customer.Address} > </IonInput>
                    </IonItem>
                </IonCol>

                <IonCol>
                    <IonItem>
                        <IonLabel position="stacked">Telefono</IonLabel>
                        <IonInput onIonChange={e => customer.Phone = e.detail.value}
                        value={customer.Phone} > </IonInput>
                    </IonItem>
                </IonCol>
            </IonRow>



            <IonItem>
                <IonButton onClick={save} color={'success'} fill='solid' slot='end' size='default'>
                    <IonIcon icon={checkmark}/>
                    Guardar
                </IonButton>
            </IonItem>

        </IonCard>



        
      </IonContent>
    </IonPage>
  );
};

export default CustomerEdit;
