import messageModel from "../models/message.model.js";

export default class MessagesDAO{

    constructor(){
        this.messageModel = messageModel;
    };

    async getAllMessages(){

        try {
            const messages = await this.messageModel.find();
            return messages
        } catch (error) {
            Error('Error to obtain messages')
        }
    };

    async addMessage(user, message){
        try {
            const newMessage = await this.messageModel.create({ user: user, message: message });
            return newMessage
        } catch (error) {
            Error('Failure at the moment of adding a message')
        }
    };

}