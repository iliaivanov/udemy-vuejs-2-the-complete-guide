new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        startGame: function() {
            this.gameIsRunning = true
            this.playerHealth = 100
            this.monsterHealth = 100
            this.turns = []
        },
        attack: function () {
            this.playerAttacks(3, 10)
            if (this.checkWin()) {
                return
            }
            this.monsterAttacks()
        },
        specialAttack: function() {
            this.playerAttacks(10, 20, true)
            if (this.checkWin()) {
                return
            }
            this.monsterAttacks()
        },
        heal: function() {
            if (this.playerHealth <= 90) {
                this.playerHealth += 10
            } else {
                this.playerHealth = 100
            }
            this.turns.unshift({
                isPlayer: true,
                text: 'Player heals for 10'
            })
            this.monsterAttacks()
        },
        giveUp: function() {
            this.gameIsRunning = false
        },
        playerAttacks: function(min, max, special) {
            let damage = this.getRandomDamage(min, max)
            this.monsterHealth -= damage
            this.turns.unshift({
                isPlayer: true,
                text: `Player hits Monster ${special ? 'hard' : ''} for ${damage}`
            })
        },
        monsterAttacks: function(min, max) {
            let damage = this.getRandomDamage(4, 12)
            this.playerHealth -= damage
            this.checkWin()
            this.turns.unshift({
                isPlayer: false,
                text: `Moster hits Player for ${damage}`
            })
        },
        getRandomDamage: function(min, max) {
            return Math.floor((Math.random() * max) + 1, min)
        },
        checkWin: function() {
            if (this.monsterHealth <= 0) {
                if (confirm('You won! New game?')) {
                    this.startGame()
                } else {
                    this.gameIsRunning = false
                }
                return true
            } else if (this.playerHealth <= 0) {
                if (confirm('You lost! New game?')) {
                    this.startGame()
                } else {
                    this.gameIsRunning = false
                }
                return true
            }
        }
    }
});