export default class Player {

    private id: string
    private name: string
    private nickname: string
    private cellphoneNumber: string
    private email: string
    private birthdate: Date
    private hand: string
    private mutualist: string
    private urgency: string
    private busySchedules: object
    
    constructor(
        id: string,
        name: string,
        nickname: string,
        cellphoneNumber: string,
        email: string,
        birthdate: Date,
        hand: string,
        mutualist: string,
        urgency: string,
        busySchedules: object){
        this.id = id
        this.name = name
        this.nickname = nickname
        this.cellphoneNumber = cellphoneNumber
        this.email = email
        this.birthdate = birthdate
        this.hand = hand
        this.mutualist = mutualist
        this.urgency = urgency
        this.busySchedules = busySchedules
    }

    getId() { return this.id }
    setId(id: string) { this.id = id }

    getName() { return this.name }
    setName(name: string) { this.name = name }

    getNickname() { return this.nickname }
    setNickname(nickname: string) { this.nickname = nickname }

    getCellphoneNumber() { return this.cellphoneNumber }
    setCellphoneNumber(cellphoneNumber: string) { this.cellphoneNumber = cellphoneNumber }

    getEmail() { return this.email }
    setEmail(email: string) { this.email = email }

    getBirthdate() { return this.birthdate }
    setBirthdate(birthdate: Date) { this.birthdate = birthdate }

    getHand() { return this.hand }
    setHand(hand: string) { this.hand = hand }

    getMutualist() { return this.mutualist }
    setMutualist(mutualist: string) { this.mutualist = mutualist }

    getUrgency() { return this.urgency }
    setUrgency(urgency: string) { this.urgency = urgency }

    getBusySchedules() { return this.busySchedules }
    setBusySchedules(busySchedules: object) { this.busySchedules = busySchedules }

    clone() {
        return new Player(
            this.getId(),
            this.getName(),
            this.getNickname(),
            this.getCellphoneNumber(),
            this.getEmail(),
            this.getBirthdate(),
            this.getHand(),
            this.getMutualist(),
            this.getUrgency(),
            this.getBusySchedules()
        )
    }

    getAge(){
        if(!this.getBirthdate()){
            return null
        }
        const today = new Date();
        let age = today.getFullYear() - this.getBirthdate().getFullYear();
        const m = today.getMonth() - this.getBirthdate().getMonth();
        if (m < 0 || (m === 0 && today.getDate() < this.getBirthdate().getDate())) {
            age--;
        }
        return age;
    }
}