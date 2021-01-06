import React, { Component } from "react"
import classes from './Auth.module.css'
import { Button } from '../../components/UI/Button/Button.jsx'
import { Input } from '../../components/UI/Input/Input.jsx'

class Auth extends Component {

   loginHandler = () => {

   }

   registerHandler = () => {

   }

   submitHandler = event => {
      event.preventDefault()
   }

   render() {
      return (
         <div className={classes.Auth}>
            <div>
               <h1>Авторизация</h1>

               <form
                  onSubmit={this.submitHandler}
                  className={classes.AuthForm}>
                  <Input label="Email" />
                  <Input
                     label="Пароль"
                  />

                  <Button
                     type="success"
                     onClick={this.loginHandler}
                  >Войти
                  </Button>
                  <Button
                     type="primary"
                     onClick={this.registerHandler}
                  >Зарегистрироваться
                  </Button>

               </form>
            </div>
         </div>
      )
   }
}

export { Auth }