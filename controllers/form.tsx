const {Forms} = require('../models/form');
// const express = require('express');
const router = express.Router();

router.get('/', async (req: any,res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { success: boolean; }): void; new(): any; }; }; send: (arg0: any) => void; }) => {
    const formList = await Forms.find()

    if(!formList) {
        res.status(500).json({success: false})
    }
    res.send(formList);
})

router.post('/', async (req: { body: { start: any; end: any; title: any; description: any; allDay: any; free: any; color: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; send: { (arg0: string): any; new(): any; }; }; send: (arg0: any) => void; }) => {
    let form = new Forms({
        start: req.body.start,
        end: req.body.end,
        title: req.body.title,
        description: req.body.description,
        allDay: req.body.allDay,
        free: req.body.free,
        color: req.body.color,
    })

    form = await form.save();

    if(!form)
    return res.status(400).send('the form cannot be created!')
    res.send(form);
})
//delete
router.delete('/:id', (req: { params: { id: any; }; }, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { success: boolean; message?: string; error?: any; }): any; new(): any; }; }; }) => {
    Forms.findOneAndRemove(req.params.id).then((form: any) => {
        if(form) {
            return res.status(200).json({success: true, message: 'the form is deleted!'})
        } else {
            return res.status(404).json({success: false , message: "form not found!"})
        }
    }).catch((err: any)=>{
        return res.status(500).json({success: false, error: err}) 
     })
})

module.exports = router;
