import React from "react";
import { useState } from "react";

let userEvents;
// const defaultEvents = [{
//     id: 1,
//     start: '2023-03-08T13:00',
//     end: '2023-03-08T13:45',
//     title: 'Lunch @ Butcher\'s',
//     description: '',
//     allDay: false,
//     free: true,
//     color: '#009788'
// },

  const [formData, setFormData] = useState({
    id: "",
    start: '',
    end: '',
    title: '',
    category: '',
    description: '',
    allDay: false,
    free: true,
    color: '#009788'
    
  })

  const myformsschema = new mongoose.Schema({
    title: { 
        type: String, 
        default: '', 
        required: true, 
    },
    start: {
        type: Date,
    },
    end: {
        type: Date,
    },
    color: {
        type: String,
        default: '',
    },
    description: {
        type: String,
        default: '',
        required: true},
        
    allDay: {
        required: true},  
    free: {
        required: true},   
    id: {
        required: true},    
}       
)
  


    const loadPopupForm = React.useCallback((event: { title: any; description: any; start: any; end: any; allDay: any; status: any; color: any; }) => {
        setTitle(event.title);
        setDescription(event.description);
        setDate([event.start, event.end]);
        setAllDay(event.allDay || false);
        setStatus(event.status || 'busy');
        setSelectedColor(event.color || '');
    }, []);

function setTitle(title: any) {
    throw new Error("Function not implemented.");
}


function setDescription(description: any) {
    throw new Error("Function not implemented.");
}


function setDate(arg0: any[]) {
    throw new Error("Function not implemented.");
}


function setAllDay(arg0: any) {
    throw new Error("Function not implemented.");
}


function setStatus(arg0: any) {
    throw new Error("Function not implemented.");
}


function setSelectedColor(arg0: any) {
    throw new Error("Function not implemented.");
}
