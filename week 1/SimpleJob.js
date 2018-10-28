/* a job platform, where:
companies publish jobs that include description and pay
freelancers like jobs and accept the payments
companies give jobs

*/ 
//classes

var Job = class {
    constructor (name, description) {
    this.name = name
    this.description=description
    this.publishedJob = []
    this.givenJob = []
    this.jobLiked = []
    }
}
var Company = class {
    constructor (name) {
        this.name = name
        this.publishJob= []
        this.giveJob = []
    }
    publish(Job) {
        this.Job = Job
        this.publishJob.push(this)
        Job.publishedJob.push(this)
        }
    give(Job) {
            this.giveJob.push(this)
            Job.givenJob.push(this)
        }
}
var Pay= class {
    constructor (amount) {
    this.amount= amount
    this.acceptPay = [] }
}

var Freelancer = class {
    constructor (name, skill) {
    this.name = name
    this.skill = skill
    this.acceptedPay = []
    this.iLikeJob = [] }
   
   accept(Pay) {
    Pay.acceptPay.push(this)
    this.acceptedPay.push(this)

    }

like(Job) {
    Job.jobLiked.push(this)
    this.iLikeJob.push(this) }
}

//actors

var Tim = new Freelancer ("Tim", "musician")
var Josh = new Freelancer ("Josh", "translator")
var newSong = new Job ("a new song", "compose a new song")
var translate = new Job ("translate", "translate from German to English")
var eSharp = new Company ("E Sharp")
var linguaGroup = new Company ("Lingua Group")
var pay1 = new Pay ("100$")
var pay2 = new Pay ("50$")

//actions

eSharp.publish(newSong)
linguaGroup.publish(translate)
Tim.like(newSong)
Josh.like(translate)
Tim.accept(pay1)
Josh.accept(pay2)
eSharp.give(newSong)
linguaGroup.give(translate)
