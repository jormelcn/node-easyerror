import { Error } from './error';

export interface ErrorHandler {

  reportError : (error : Error) => void;

}