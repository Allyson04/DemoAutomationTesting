Feature: Registrar na Demo Automating

 Scenario: Acessar, inserir informações e confirmar registro
 Given Acessar a tela de registro
 When Inserir informações para Registro
 And Confirmar o submit
 Then Validar que me registrei com sucesso   

 Scenario: Acessar, inserir informações incorreto
 Given Acessar a tela de registro
 When Inserir informações erradas para Registro
 And Confirmar o submit
 Then Validar que me registrei com sucesso   