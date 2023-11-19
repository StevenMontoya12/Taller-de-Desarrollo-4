import { IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useHistory, useParams } from 'react-router';
import ExploreContainer from '../../components/ExploreContainer';
import { add, checkmark, close, create, pencil, save } from 'ionicons/icons';
import { useEffect, useState } from 'react';
import { removeEmployee, saveEmployee, searchEmployeeById, searchEmployees } from './EmployeeApi';
import Employee from './Employee';


const EmployeeEdit: React.FC = () => {

    const { name,id } = useParams<{ name: string; id: string; }>();

    const [employee,setEmployee] = useState<Employee>({});
    const history = useHistory();

    useEffect(() =>{
      search();
    }, [history.location.pathname]);

    const search = () => {
        if (id !== 'new'){
            let result = searchEmployeeById(id);
            setEmployee(result);
        }


    }



    

    const save = () => {
        saveEmployee(employee);
        history.push('/page/employees')
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
            <IonTitle>{id === 'new' ? 'Agregar Empleado' : 'Editar Empleado'}</IonTitle>
            
            <IonRow>
                <IonCol>
                    <IonItem>
                        <IonLabel position="stacked">Nombre</IonLabel>
                        <IonInput onIonChange={e => employee.Firstname = String(e.detail.value)}
                        value={employee.Firstname} > </IonInput>
                    </IonItem>
                </IonCol>

                <IonCol>
                    <IonItem>
                        <IonLabel position="stacked">Apellido</IonLabel>
                        <IonInput onIonChange={e => employee.Lastname = String(e.detail.value)}
                        value={employee.Lastname} > </IonInput>
                    </IonItem>
                </IonCol>

                <IonCol>
                    <IonItem>
                        <IonLabel position="stacked">Email</IonLabel>
                        <IonInput onIonChange={e => employee.Email = String(e.detail.value)}
                        value={employee.Email} > </IonInput>
                    </IonItem>
                </IonCol>
            </IonRow>

            <IonRow> 
                <IonCol>
                    <IonItem>
                        <IonLabel position="stacked">Direccion</IonLabel>
                        <IonInput onIonChange={e => employee.Address = String(e.detail.value)}
                        value={employee.Address} > </IonInput>
                    </IonItem>
                </IonCol>

                <IonCol>
                    <IonItem>
                        <IonLabel position="stacked">Telefono</IonLabel>
                        <IonInput onIonChange={e => employee.Phone = String(e.detail.value)}
                        value={employee.Phone} > </IonInput>
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

export default EmployeeEdit;
