import { Persons } from '@/lib/mocks/Persons'
import { HistoryCard } from '../history-card'

export function FifthFold() {
  return (
    <div className="lp-section">
      <section className="grid grid-cols-2 items-center justify-center gap-8">
        <h2 className="lp-subtitle">
          Os alunos do Wits têm{' '}
          <span className="text-custom-gradient">histórias inspiradoras</span>{' '}
          para contar
        </h2>
        {Persons.filter((i) => i.type === 'history').map((person) => (
          <HistoryCard
            key={person.id}
            name={person.name}
            message={person.message}
            nationality={person.nationality}
            imageUrl={person.avatarUrl}
          />
        ))}
      </section>
    </div>
  )
}
