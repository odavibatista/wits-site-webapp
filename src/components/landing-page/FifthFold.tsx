import { Persons } from '@/lib/mocks/Persons'
import { HistoryCard } from '../history-card'

export function FifthFold() {
  const Carousel = () => (
    <section className="flex flex-col gap-8 xl:hidden">
      <h2 className="lp-title">
        Os alunos do Wits têm{' '}
        <span className="text-custom-gradient">histórias inspiradoras</span>{' '}
        para contar
      </h2>
      <article className="flex justify-between gap-5 overflow-x-scroll px-3 md:px-12">
        {Persons.filter((i) => i.type === 'history').map((person) => (
          <HistoryCard
            key={person.id}
            name={person.name}
            message={person.message}
            nationality={person.nationality}
            imageUrl={person.avatarUrl}
          />
        ))}
      </article>
    </section>
  )

  const Grid = () => (
    <section className="hidden items-center gap-10 xl:grid xl:grid-cols-2">
      <h2 className="lp-title">
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
  )

  return (
    <div className="lp-section">
      <Carousel />
      <Grid />
    </div>
  )
}
