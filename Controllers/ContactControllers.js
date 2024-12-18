const ContactSchema = require("../Model/Contact");


const updateContact = async (req,res) => {
    try {
        const {id} = req.params;
        console.log("id",id);
        const updateContact = await ContactSchema.findByIdAndUpdate(id,{$set:{...req.body}});
        res.status(200).json({msg:'Contact updated',updateContact});
    } catch (error) {
        console.log(error);
        res.send('You have a problem')
    }
}





const getContactByID = async (req,res) => {
    try {
        const {id} = req.params;
        console.log("id",id);
        const contact = await ContactSchema.findById(id);
        res.status(200).json({msg:'Contact',contact});
    } catch (error) {
        console.log(error);
        res.send('You have a problem')
    }
}



const getAllContacts = async (req, res) =>{


    try {
        const contact = await ContactSchema.find();
        res.status(200).json({msg: 'You got all the contacts', contact});

    } catch (error) {
        console.log(error)
        res.send('You have a problem')
    }
}


const addNewContact = async (req, res) => {
    
    try {
    
        const newContact = new ContactSchema(req.body);
        console.log ("New Contact",req.body);
        await newContact.save();
        res.status(200).json({msg:'You added a new contact',newContact});
        
    } catch (error) {
        console.log(error);
        res.send('You have a problem')}
    };


    const removeContact =async (req,res) => {

        try {
        const {id} = req.params;
        const deleteContact = await ContactSchema.findByIdAndDelete(id);
        res.status(200).json({msg:'Contact deleted',deleteContact});
    } catch (error) {  
        console.log(error);
            res.send('You have a problem')
        } 
    }


module.exports = {addNewContact,getAllContacts,getContactByID,updateContact};