import './../assets/css/components/message.css'

export default function Massage({ massage, children }) {
  return (
    <div className="massage">{massage}{children}</div>
  )
}