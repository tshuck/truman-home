import * as React from 'react'
import Draw from './Draw'
import PoemsLayout from '../../layouts/PoemsLayout'

class YourePrimal extends Draw {
  private you: React.RefObject<HTMLSpanElement> = React.createRef()
  private re: React.RefObject<HTMLSpanElement> = React.createRef()
  private primal: React.RefObject<HTMLSpanElement> = React.createRef()
  private young: React.RefObject<HTMLSpanElement> = React.createRef()
  private youKnowThat: React.RefObject<HTMLSpanElement> = React.createRef()
  private knew: React.RefObject<HTMLSpanElement> = React.createRef()
  private it: React.RefObject<HTMLSpanElement> = React.createRef()
  private beforeYour: React.RefObject<HTMLSpanElement> = React.createRef()
  private identity: React.RefObject<HTMLSpanElement> = React.createRef()
  private image: React.RefObject<HTMLSpanElement> = React.createRef()
  private could: React.RefObject<HTMLSpanElement> = React.createRef()
  private be: React.RefObject<HTMLSpanElement> = React.createRef()
  private complicated: React.RefObject<HTMLSpanElement> = React.createRef()
  private simply: React.RefObject<HTMLSpanElement> = React.createRef()
  private knew2: React.RefObject<HTMLSpanElement> = React.createRef()
  private yourself: React.RefObject<HTMLSpanElement> = React.createRef()
  private period: React.RefObject<HTMLSpanElement> = React.createRef()
  private remember: React.RefObject<HTMLSpanElement> = React.createRef()
  private first: React.RefObject<HTMLSpanElement> = React.createRef()
  private stand: React.RefObject<HTMLSpanElement> = React.createRef()
  private letYour: React.RefObject<HTMLSpanElement> = React.createRef()
  private presence: React.RefObject<HTMLSpanElement> = React.createRef()
  private play: React.RefObject<HTMLSpanElement> = React.createRef()
  private fearless: React.RefObject<HTMLSpanElement> = React.createRef()
  private l: React.RefObject<HTMLSpanElement> = React.createRef()
  private y: React.RefObject<HTMLSpanElement> = React.createRef()
  private everywhere: React.RefObject<HTMLSpanElement> = React.createRef()

  youngToYouKnowThat() {
    const from = this.left(this.young)
    const to = this.top(this.youKnowThat)

    const one = { x: from.x - 10, y: from.y }
    const two = { x: one.x, y: to.y }
    this.lines(from, one, two)
  }

  couldToBe() {
    const from = this.bottom(this.could)
    const to = this.bottom(this.be)

    const one = { x: from.x, y: from.y + 55 }
    const two = { x: to.x, y: one.y }

    this.lines(from, one, two, to)
  }

  knewToYourself() {
    const from = this.bottom(this.knew2)
    const to = this.bottom(this.yourself)

    const one = { x: from.x, y: from.y + 65 }
    const two = { x: to.x, y: one.y }

    this.lines(from, one, two, to)
  }

  firstToStand() {
    const from = this.right(this.first)
    const to = this.right(this.stand)

    const one = { x: from.x + 60, y: from.y }
    const two = { x: one.x, y: to.y}

    this.lines(from, one, two, to)
  }

  playToFearless() {
    const from = this.right(this.play)
    const to = this.right(this.fearless)

    const one = { x: from.x + 60, y: from.y }
    const two = { x: one.x, y: to.y }

    this.lines(from, one, two, to)
  }

  componentDidMount() {
    const {
      left, right, top, bottom,
    } = this

    this.line(right(this.you), left(this.re))
    this.line(right(this.re), left(this.primal))
    this.humpTop(top(this.primal), top(this.young))
    this.youngToYouKnowThat()
    this.line(right(this.youKnowThat), left(this.knew))
    this.cornerY(bottom(this.knew), right(this.it))
    this.cornerY(bottom(this.it), left(this.beforeYour))
    this.zigY(bottom(this.beforeYour), top(this.identity))
    this.line(right(this.identity), left(this.image))
    this.humpTop(top(this.image), top(this.could))
    this.couldToBe()
    this.line(right(this.be), left(this.complicated))
    this.line(right(this.complicated), left(this.simply))
    this.cornerY(top(this.simply), left(this.knew2))
    this.knewToYourself()
    this.line(right(this.yourself), left(this.period))

    this.cornerY(bottom(this.remember), left(this.first))
    this.firstToStand()
    this.cornerY(top(this.stand), left(this.letYour))
    this.cornerY(bottom(this.letYour), right(this.presence))
    this.humpLeft(left(this.presence), left(this.play))
    this.playToFearless()
    this.cornerX(left(this.fearless), top(this.l))
    this.line(right(this.l), left(this.y))
    this.zigY(bottom(this.y), top(this.everywhere))
  }

  render() {
    const { Line, Page, SVGContainer, Word } = this
    return <PoemsLayout>
      <SVGContainer ref={this.svg}>
        <Page bg="#CD5C5C">
          <Line>
            missiles. When they go after <Word ref={this.you}>you</Word> they’<Word ref={this.re}>re</Word> following a <Word ref={this.primal}>primal</Word> instinct.
          </Line>
          <Line>
            It is the function of the <Word ref={this.young}>young</Word> to get rid of their elders, to make
          </Line>
          <Line>
            room on the planet. <Word ref={this.youKnowThat}>You know that</Word>, don’t you? The Greeks <Word ref={this.knew}>knew</Word>
          </Line>
          <Line>
            <Word ref={this.it}>it</Word>. Read the Greeks.
          </Line>
          <Line indent={true}>
            The professor said that <Word ref={this.beforeYour}>before your</Word> students enter the room you
          </Line>
          <Line>
            must have decided where you’ll be — “posture and placement” — and
          </Line>
          <Line>
            who you’ll be — “<Word ref={this.identity}>identity</Word> and <Word ref={this.image}>image</Word>.” I never <Word ref={this.knew2}>knew</Word> teaching <Word ref={this.could}>could</Word>
          </Line>
          <Line>
            <Word ref={this.be}>be</Word> that <Word ref={this.complicated}>complicated</Word>. He said, You <Word ref={this.simply}>simply</Word> cannot teach unless you
          </Line>
          <Line>
            know where to position <Word ref={this.yourself}>yourself</Word> physically<Word ref={this.period}>.</Word> That classroom can be
          </Line>
          <Line>
            your battleground or your playground. And you have to know who
          </Line>
          <Line>
            you are. <Word ref={this.remember}>Remember</Word> Pope: “Know thyself, presume not God to scan /
          </Line>
          <Line>
            The proper study of mankind is man.” <Word ref={this.first}>First</Word> day of your teaching you
          </Line>
          <Line>
            are to stand at your classroom door and <Word ref={this.letYour}>let your</Word> students know how
          </Line>
          <Line>
            happy you are to see them. <Word ref={this.stand}>Stand</Word>, I say. Any playwright will tell you
          </Line>
          <Line>
            that when the actor sits down the <Word ref={this.play}>play</Word> sits down. The best move of
          </Line>
          <Line>
            all is to establish yourself as a <Word ref={this.presence}>presence</Word> and to do it outside in the hall-
          </Line>
          <Line>
            way. Outside, I say. That’s your territory and when you’re out there
          </Line>
          <Line>
            you’ll be seen as a strong teacher, <Word ref={this.fearless}>fearless</Word>, ready to face the swarm.
          </Line>
          <Line>
            That’s what a c<Word ref={this.l}>l</Word>ass is, a swarm. And <Word ref={this.y}>y</Word>ou’re a warrior teacher. It’s
          </Line>
          <Line>
            something people don’t think about. Your territory is like your aura,
          </Line>
          <Line>
            it goes with you <Word ref={this.everywhere}>everywhere</Word>, in the hallways, on the stairs and,
          </Line>
          <Line>
            assuredly, in the classroom. Never let them invade your territory.
          </Line>
          <Line>
            Never. And remember: teachers who sit or even stand behind their
          </Line>
          <Line>
            desks are essentially insecure and should try another line of work.
          </Line>
          <Line indent={true}>
            <Word>I like</Word>d <Word>the way</Word> he said assuredly, the first time I ever heard it used
          </Line>
          <Line>
            outside of a Victorian novel. I promised myself that when I became
          </Line>
          <Line>
            a teacher I’d use the word, too. It had an important sound to it that
          </Line>
          <Line>
            would make people sit up and pay attention.
          </Line>
          <Line indent={true}>
            I thought it was terrific the way <Word>you could</Word> stand up there on that
          </Line>
          <Line>
            little platform with your podium and your desk and <Word>talk</Word> for an hour
          </Line>
          <Line>
            with everyone before you making notes and if you had any kind of
          </Line>
          <Line>
            good looks or personality the girls would be tripping over themselves
          </Line>
          <Line>
            to see you afterward in your office or <Word>anywhere</Word> else. That’s what I
          </Line>
          <Line>
            thought at the time.
          </Line>
        </Page>
      </SVGContainer>
    </PoemsLayout>
  }
}

export default YourePrimal
