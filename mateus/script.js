const formulario = document.querySelector("#formulario")
const tarefa = document.querySelector("#tarefa")
const tarefas_resultado= document.querySelector("#tarefas_resultado")


formulario.addEventListener("submit", (evento) =>{
    evento.preventDefault()
    const nova_tarefa = document.createElement("li")

    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"

    const tarefa_spam = document.createElement("span")
    tarefa_spam.textContent = tarefa.value

    const deletar = document.createElement("button")
    deletar.id = "excluir"
    deletar.textContent = "Excluir"

    deletar.addEventListener("click", () =>{
        tarefas_resultado.removeChild(nova_tarefa);
    })

    checkbox.addEventListener("click", (evento)=>{
        if(evento.target.checked){
        tarefa_spam.style.textDecoration = "line-through";
        } else {
            tarefa_spam.style.textDecoration = 'none';
        }
    })

    nova_tarefa.append(checkbox,tarefa_spam,deletar)

    tarefas_resultado.appendChild(nova_tarefa)


    tarefa.value = ""
    tarefa.focus()
})