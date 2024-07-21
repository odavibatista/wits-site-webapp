import CardTestimony from '@/components/card-testimony'
import { Persons } from '@/lib/mocks/Persons'

export function SecondFold() {
  return (
    <div className="lp-section">
      <h2 className="lp-title">
        Junte-se a mais de{' '}
        <span className="text-custom-gradient">25 milhões</span> de alunos e
        comece uma carreira que você vai adorar.
      </h2>
      <section className="flex justify-between px-12">
        {Persons.filter((i) => i.type === 'testimony').map((person) => (
          <CardTestimony
            key={person.id}
            studentName={person.name}
            testimonyText={person.message}
            profession={person.profession}
            imageUrl={person.avatarUrl}
          />
        ))}
      </section>
    </div>
  )
}
