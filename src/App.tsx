interface ButtonProps {
  text?: string
}

function Button(props: ButtonProps) {
  return (
    <button className="bg-violet-500 px-4 h-10">
      {props.text ?? 'Padrao'}
    </button>
  )
}
function App() {
  return (
    <div>
      <Button text="Enviar" />
      <Button text="Cancelar" />
      <Button />
    </div>
  )
}

export default App
