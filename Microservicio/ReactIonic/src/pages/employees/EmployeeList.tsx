import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import { add, close, create, pencil } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { removeEmployee, saveEmployee, searchEmployees } from './EmployeeApi';
import Employee from './Employee';


const EmployeeList: React.FC = () => {

    const { name } = useParams<{ name: string; }>();
    const [clientes,setClientes] = useState<Employee[]>([]);
    const history = useHistory();

    useEffect(() =>{
      search();
    }, [history.location.pathname]);

    const search = () => {
      let result = searchEmployees();
      setClientes(result);
    }

    const pruebaLocalStorage = () => {
      const ejemplo = {
        id: '1',
        Firstname: 'Steven de Dios',
        Lastname: 'Montoya',
        Email: 'StevenMontoya19@unach.mx',
        Phone: '9612034781',
        Address: 'Playas de Catazaja',
      }
      saveEmployee(ejemplo);
    }

    const remove = (id:string) => {
      removeEmployee(id);
      search();
    }

    const addEmployee = () => {
      history.push('/page/employees/new')
    }

    const editEmployee = (id:string) => {
      history.push('/page/employees/' + id)
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
            <IonTitle>Gestion de Empleados</IonTitle>
            <IonItem>
                <IonButton onClick={addEmployee}  color={'primary'} fill='solid' slot='end' size='default'>
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
                
                    {clientes.map((cliente: Employee) => 
                        <IonRow>
                            <IonCol>{cliente.Firstname + ' ' + cliente.Lastname}</IonCol>
                            <IonCol>{cliente.Email}</IonCol>
                            <IonCol>{cliente.Phone}</IonCol>
                            <IonCol>{cliente.Address}</IonCol>
                            <IonCol>
                            <IonButton onClick={() => editEmployee(String(cliente.id))} fill='clear' color={'primary'}>
                                    <IonIcon slot='icon-only' icon={create}/>
                                    
                                </IonButton>
                                <IonButton onClick={() => remove(String(cliente.id))} fill='clear' color={'danger'}>
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

export default EmployeeList;
