import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import { add, checkmark, close, create, pencil, save } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { removeVendor, saveVendor, searchVendorById, searchVendors } from './VendorApi';
import Vendor from './Vendor';


const VendorEdit: React.FC = () => {

    const { name,id } = useParams<{ name: string; id: string; }>();

    const [vendor,setVendor] = useState<Vendor>({});
    const history = useHistory();

    useEffect(() =>{
      search();
    }, [,]);

    const search = () => {
        if (id !== 'new'){
            let result = searchVendorById(id);
            setVendor(result);
        }


    }



    

    const save = () => {
        saveVendor(vendor);
        history.push('/page/vendors')
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
            <IonTitle>{id === 'new' ? 'Agregar Proveedor' : 'Editar Proveedor'}</IonTitle>
            
            <IonRow>
                <IonCol>
                    <IonItem>
                        <IonLabel position="stacked">Nombre</IonLabel>
                        <IonInput onIonChange={e => vendor.Firstname = String(e.detail.value)}
                        value={vendor.Firstname} > </IonInput>
                    </IonItem>
                </IonCol>

                <IonCol>
                    <IonItem>
                        <IonLabel position="stacked">Apellido</IonLabel>
                        <IonInput onIonChange={e => vendor.Lastname = String(e.detail.value)}
                        value={vendor.Lastname} > </IonInput>
                    </IonItem>
                </IonCol>

                <IonCol>
                    <IonItem>
                        <IonLabel position="stacked">Email</IonLabel>
                        <IonInput onIonChange={e => vendor.Email = String(e.detail.value)}
                        value={vendor.Email} > </IonInput>
                    </IonItem>
                </IonCol>
            </IonRow>

            <IonRow> 
                <IonCol>
                    <IonItem>
                        <IonLabel position="stacked">Direccion</IonLabel>
                        <IonInput onIonChange={e => vendor.Address = String(e.detail.value)}
                        value={vendor.Address} > </IonInput>
                    </IonItem>
                </IonCol>

                <IonCol>
                    <IonItem>
                        <IonLabel position="stacked">Telefono</IonLabel>
                        <IonInput onIonChange={e => vendor.Phone = String(e.detail.value)}
                        value={vendor.Phone} > </IonInput>
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

export default VendorEdit;
