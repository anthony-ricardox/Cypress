//Funcionalidade
describe('Login', () =>{
    //Cenario 1
    it('Login com sucesso', () => {
        //abre o site
        cy.visit('https://automationpratice.com.br/login')
               
        //preenche o email
        cy.get('#user').type('teste@gmail.com')
        
        //preenhce a senha
        cy.get('#password').type('123456')
        //clica em logar
        cy.get('#btnLogin').click()
        
        //valida.
        cy.get('#swal2-title').should('have.text', 'Login realizado')
    })

    //Cenario 2
    it('Login com senha inválida', () => {
        
    })

    //Cenario 3
    it('Login com email inválido', () => {
        
    })
})