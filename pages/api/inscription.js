//imports
const fs = require('fs')
const { v4: uuidv4 } = require('uuid')

export default function handler(req, res) {
    if(req.body.length === 0) return res.json({error: true})
    //variables
    let rawdata = fs.readFileSync('database/users.json')
    let users = JSON.parse(rawdata)
    let new_user = req.body
    let exist = false
    users.forEach(user => {
        if(user.email == new_user.email){
            exist = true
            return 0
        }
    })
    if(exist) return res.json({error: "Adresse email existe déja"})
    new_user.etat = "examen"
    new_user.id = uuidv4().substring(0, 8)
    users = [...users, new_user]
    let data = JSON.stringify(users, null, 2)
    fs.writeFileSync('database/users.json', data, (err)=>{
        console.log('data added')
    })
    res.status(200).json({error: false})
}