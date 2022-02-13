export default class Player {
    constructor(id, name, nickname, cellphoneNumber, email, birthdate, hand, mutualist, urgency, busySchedules){
        this._id = id
        this._name = name
        this._nickname = nickname
        this._cellphoneNumber = cellphoneNumber
        this._email = email
        this._birthdate = birthdate
        this._hand = hand
        this._mutualist = mutualist
        this._urgency = urgency
        this._busySchedules = busySchedules
    }

    getId() { return this._id }
    setId(id) { this._id = id }

    getName() { return this._name }
    setName(name) { this._name = name }

    getNickname() { return this._nickname }
    setNickname(nickname) { this._nickname = nickname }

    getCellphoneNumber() { return this._cellphoneNumber }
    setCellphoneNumber(cellphoneNumber) { this._cellphoneNumber = cellphoneNumber }

    getEmail() { return this._email }
    setEmail(email) { this._email = email }

    getBirthdate() { return this._birthdate }
    setBirthdate(birthdate) { this._birthdate = birthdate }

    getHand() { return this._hand }
    setHand(hand) { this._hand = hand }

    getMutualist() { return this._mutualist }
    setMutualist(mutualist) { this._mutualist = mutualist }

    getUrgency() { return this._urgency }
    setUrgency(urgency) { this._urgency = urgency }

    getBusySchedules() { return this._busySchedules }
    setBusySchedules(busySchedules) { this._busySchedules = busySchedules }

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
}