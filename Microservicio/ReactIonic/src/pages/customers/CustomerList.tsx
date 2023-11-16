import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import { add, close, create, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';


const CustomerList: React.FC = () => {

  const { name } = useParams<{ name: string; }>();

  const [clientes,setClientes] = useState<any>([]);

  useEffect(() =>{
    search();
  }, [,]);

  const search = () => {
    const datosDeEjemplo = [
        {
            id: '1',
            Firstname:'Steven',
            Email:'steven.montoya19@unach.mx',
            Phone:'9612034781',
            Adress:'Boulevard',
        },
        {
            Id: '2',
            Firstname:'Luis',
            Email:'Alfaro.Gutierrez29@unach.mx',
            Phone:'45345345345',
            Adress:'San Roque',
        }
    ];
    setClientes(datosDeEjemplo);
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
            <IonTitle>Gestion de Clientes</IonTitle>
            <IonItem>
                <IonButton color={'primary'} fill='solid' slot='end' size='default'>
                    <IonIcon icon={add}/>
                    Agregar Cliente
                </IonButton>
            </IonItem>
                <IonGrid className='table'>
                    <IonRow>
                        <IonCol>Nombre</IonCol>
                        <IonCol>Email</IonCol>
                        <IonCol>Teléfono</IonCol>
                        <IonCol>Direccion</IonCol>
                        <IonCol>Acciones</IonCol>
                    </IonRow>
                
                    {clientes.map((cliente:any) => 
                        <IonRow>
                            <IonCol>{cliente.Firstname}</IonCol>
                            <IonCol>{cliente.Email}</IonCol>
                            <IonCol>{cliente.Phone}</IonCol>
                            <IonCol>{cliente.Adress}</IonCol>
                            <IonCol>
                                <IonButton fill='clear' color={'primary'}>
                                    <IonIcon slot='icon-only' icon={create}/>
                                    
                                </IonButton>
                                <IonButton fill='clear' color={'danger'}>
                                    <IonIcon slot='icon-only' icon={close}/>
                                    
                                </IonButton>
                            </IonCol>
                        </IonRow>
                        )}
  
                


            </IonGrid>
        </IonCard>




        
      </IonContent>
    </IonPage>
  );
};

export default CustomerList;
