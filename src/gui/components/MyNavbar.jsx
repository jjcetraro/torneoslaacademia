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
                        <Offcanvas.Title id="offcanvasNavbarLabel">{process.env.REACT_APP_NAME}</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="/jugadores">Jugadores</Nav.Link>
                            {
                                process.env.REACT_APP_SHOW_RANKING === 'true' ? <Nav.Link href="/ranking_anual">Ranking Anual</Nav.Link> : <></>
                            }
                            {
                                process.env.REACT_APP_SHOW_REGULATION === 'true' ? <Nav.Link href="/reglamento">Reglamento</Nav.Link> : <></>
                            }
                            <Nav.Link href="/torneos">Torneos</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}
