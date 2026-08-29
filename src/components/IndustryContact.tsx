import Contact from './Contact'
import { useIndustry } from '../context/IndustryContext'

export default function IndustryContact() {
  const { contact, label } = useIndustry()

  return (
    <Contact
      title={contact.title}
      subtitle={contact.subtitle}
      businessFieldLabel={contact.businessFieldLabel}
      businessFieldPlaceholder={contact.businessFieldPlaceholder}
      emailPlaceholder={contact.emailPlaceholder}
      industry={label}
    />
  )
}
