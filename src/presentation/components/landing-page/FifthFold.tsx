import { Persons } from '@/presentation/lib/mocks/Persons'
import { HistoryCard } from '../history-card'

export function FifthFold() {
  const Carousel = () => (
    <section className="relative flex flex-col gap-8 lg:hidden">
      <h2 className="lp-title">
        Os alunos do Wits têm{' '}
        <span className="text-custom-gradient">histórias inspiradoras</span>{' '}
        para contar
      </h2>
      <article className="no-scrollbar flex justify-between gap-5 overflow-x-scroll px-3 md:px-12">
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
      <div className="absolute -top-20 -z-50 h-[50%] w-[30%] translate-x-20 rotate-45 bg-secondary-800 opacity-20 blur-3xl" />
    </section>
  )

  const Grid = () => (
    <section className="relative hidden items-center gap-10 lg:grid lg:grid-cols-2">
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
      <div className="absolute top-0 -z-50 h-[50%] w-[30%] translate-x-20 rotate-45 bg-secondary-800 opacity-20 blur-3xl" />
    </section>
  )

  return (
    <div className="lp-section">
      <Carousel />
      <Grid />
    </div>
  )
}
