import { Navbar, Container, Offcanvas, Nav } from "react-bootstrap"

export default function MyNavbar() {
    return (
        <Navbar bg="light" expand={false}>
            <Container fluid>
                <Navbar.Toggle aria-controls="offcanvasNavbar" />
                <Navbar.Offcanvas
                    id="offcanvasNavbar"
                    aria-labelledby="offcanvasNavbarLabel"
                    placement="end">
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id="offcanvasNavbarLabel">Torneo</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="/players">Jugadores</Nav.Link>
                            <Nav.Link href="/ranking">Ranking</Nav.Link>
                            <Nav.Link href="/tournaments">Torneos</Nav.Link>
                            <Nav.Link href="/tournamentSignUp">Inscripbirse</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}
