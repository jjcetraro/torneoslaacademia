import { Button, Form, Table } from "react-bootstrap";
import UserProfilePageHooks from "../hooks/UserProfilePageHooks";

export default function UserProfilePage() {

    const { loggedPlayer, handleChange } = UserProfilePageHooks()
    
    return (
        loggedPlayer
        ?
        <>
            <h3 className="mt-5 mb-5">Perfil de Usuario</h3>
            <Form>
                <Form.Group className="mb-3">
                    <Form.Label>Nombre y Apellido</Form.Label>
                    <Form.Control id="formControlName" type="text" onChange={handleChange} value={loggedPlayer.getName()}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Apodo</Form.Label>
                    <Form.Control id="formControlNickname" type="text" onChange={handleChange} value={loggedPlayer.getNickname()}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Celular</Form.Label>
                    <Form.Control id="formControlCellphoneNumber" type="text" onChange={handleChange} value={loggedPlayer.getCellphoneNumber()}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Correo Electrónico</Form.Label>
                    <Form.Control id="formControlEmail" type="email" onChange={handleChange} value={loggedPlayer.getEmail()}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Fecha de Nacimiento</Form.Label>
                    <Form.Control id="formControlBirthdate" type="date" onChange={handleChange} value={loggedPlayer.getBirthdate()}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Mano</Form.Label>
                    <Form.Control id="formControlHand" type="text" onChange={handleChange} value={loggedPlayer.getHand()}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Mutualista</Form.Label>
                    <Form.Control id="formControlMutualist" type="text" onChange={handleChange} value={loggedPlayer.getMutualist()}/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Emergencia Móvil</Form.Label>
                    <Form.Control id="formControlUrgency" type="text" onChange={handleChange} value={loggedPlayer.getUrgency()}/>
                </Form.Group>
            </Form>
            <div>
                <span>Horarios en los que no puedo jugar</span>
                <Button>Agregar</Button>
            </div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Horario</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                </tbody>
            </Table>
            <Button>Guardar Cambios</Button>
        </>
        :
        <h1>Cargando...</h1>
    )
}
