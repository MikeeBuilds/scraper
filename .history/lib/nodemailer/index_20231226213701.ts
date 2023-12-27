import { EmailProductInfo, NotificationType } from '@/types';
import nodemailer from 'nodemailer';


export const Notification = {
    WELCOME: 'welcome TO PriceHoot!',
    CHANGE_OF_STOCK: 'CHANGE_OF_STOCK',
    LOWEST_PRICE: 'LOWEST_PRICE',
    THRESHOLD_MET: 'THRESHOLD_MET',
}


    export const generateEmailBody = (product: EmailProductInfo, type: NotificationType) => {
        const shorten
    }