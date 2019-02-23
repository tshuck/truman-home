import * as React from 'react'
import Draw from './Draw'
import PoemsLayout from '../../layouts/PoemsLayout'

class WeMoveAlong extends Draw {
  private we: React.RefObject<HTMLSpanElement> = React.createRef()
  private move: React.RefObject<HTMLSpanElement> = React.createRef()
  private a: React.RefObject<HTMLSpanElement> = React.createRef()
  private long: React.RefObject<HTMLSpanElement> = React.createRef()
  private comma: React.RefObject<HTMLSpanElement> = React.createRef()
  private shook: React.RefObject<HTMLSpanElement> = React.createRef()
  private with: React.RefObject<HTMLSpanElement> = React.createRef()
  private power: React.RefObject<HTMLSpanElement> = React.createRef()
  private i: React.RefObject<HTMLSpanElement> = React.createRef()
  private allowed: React.RefObject<HTMLSpanElement> = React.createRef()
  private aLittle: React.RefObject<HTMLSpanElement> = React.createRef()
  private a2: React.RefObject<HTMLSpanElement> = React.createRef()
  private shoelace: React.RefObject<HTMLSpanElement> = React.createRef()
  private rolled: React.RefObject<HTMLSpanElement> = React.createRef()
  private period: React.RefObject<HTMLSpanElement> = React.createRef()
  private imAsking: React.RefObject<HTMLSpanElement> = React.createRef()
  private whatIs: React.RefObject<HTMLSpanElement> = React.createRef()
  private patient: React.RefObject<HTMLSpanElement> = React.createRef()
  private littleNose: React.RefObject<HTMLSpanElement> = React.createRef()
  private youreCrazy: React.RefObject<HTMLSpanElement> = React.createRef()
  private period2: React.RefObject<HTMLSpanElement> = React.createRef()
  private what: React.RefObject<HTMLSpanElement> = React.createRef()
  private comma2: React.RefObject<HTMLSpanElement> = React.createRef()
  private whatAre: React.RefObject<HTMLSpanElement> = React.createRef()
  private qmark: React.RefObject<HTMLSpanElement> = React.createRef()

  moveToA(from: React.RefObject<HTMLElement>, to: React.RefObject<HTMLElement>) {
    const start = this.top(from)
    const end = this.left(to)

    const one = { x: start.x, y: start.y - 10 }
    const two = { x: end.x - 40, y: one.y }
    const three = { x: two.x, y: end.y }
    this.lines(start, one, two, three, end)
  }

  rolledToPeriod(from: React.RefObject<HTMLElement>, to: React.RefObject<HTMLElement>) {
    const start = this.right(from)
    const end = this.top(to)

    const one = { x: start.x + 10, y: start.y }
    const two = { x: one.x, y: ((end.y - start.y) / 2 + start.y)}
    const three = { x: end.x, y: two.y }
    const four = { x: three.x, y: end.y }

    this.lines(start, one, two, three, four)
  }

  componentDidMount() {
    this.line(this.right(this.we), this.left(this.move))
    this.moveToA(this.move, this.a)
    this.line(this.right(this.a), this.left(this.long))
    this.cornerX(this.right(this.long), this.top(this.comma))
    this.cornerX(this.left(this.comma), this.top(this.shook))
    this.cornerX(this.right(this.shook), this.top(this.with))
    this.cornerY(this.bottom(this.with), this.right(this.power))

    this.cornerY(this.bottom(this.i), this.left(this.allowed))
    this.humpTop(this.top(this.allowed), this.top(this.aLittle))
    this.zigY(this.bottom(this.aLittle), this.top(this.a2))
    this.zigX(this.right(this.a2), this.left(this.shoelace))
    this.line(this.right(this.shoelace), this.left(this.rolled))
    this.rolledToPeriod(this.rolled, this.period)

    this.zigY(this.bottom(this.imAsking), this.top(this.whatIs))
    this.humpRight(this.right(this.whatIs), this.right(this.patient))
    this.humpLeft(this.left(this.patient), this.left(this.littleNose))
    this.cornerY(this.bottom(this.littleNose), this.left(this.youreCrazy))
    this.cornerY(this.bottom(this.youreCrazy), this.right(this.period2))

    this.line(this.right(this.what), this.left(this.comma2))
    this.humpTop(this.top(this.comma2), this.top(this.whatAre))
    this.line(this.right(this.whatAre), this.left(this.qmark))
  }

  render() {
    const { Line, Page, SVGContainer, Word } = this
    return <PoemsLayout>
      <SVGContainer ref={this.svg}>
        <Page>
          <Line>
            <Word ref={this.we}>We</Word> don’t sit on our asses here, he said. We <Word ref={this.move}>move</Word> on and up. And
          </Line>
          <Line>
            wh<Word ref={this.a}>a</Word>t are your <Word ref={this.long}>long</Word>-range plans?
          </Line>
          <Line>
            I don’t know. I suppose I just came here to be a teacher<Word ref={this.comma}>,</Word> I said.
          </Line>
          <Line>
            He <Word ref={this.shook}>shook</Word> his head, couldn’t understand my lack of ambition. I
          </Line>
          <Line>
            wasn’t dynamic enough. Because of him those four teachers taking
          </Line>
          <Line>
            courses were moving on and up and out. That’s what he said. Why
          </Line>
          <Line>
            should they spend their lives in the classroom <Word ref={this.with}>with</Word> kids when they
          </Line>
          <Line>
            could travel the corridors of <Word ref={this.power}>power</Word>?
          </Line>
          <Line>
            <Word ref={this.i}>I</Word> felt brave for a moment and asked him, If everyone moved on
          </Line>
          <Line>
            and up and out who would teach the children?
          </Line>
          <Line>
            He ignored me, <Word ref={this.allowed}>allowed</Word> himself <Word ref={this.aLittle}>a little smile</Word> with a mouth that
          </Line>
          <Line>
            had no lips.
          </Line>
          <Line>
            I l<Word ref={this.a2}>a</Word>sted one term, September to January, before he forced me out.
          </Line>
          <Line>
            It may have been the matter of the <Word ref={this.shoelace}>shoelace</Word> and the <Word ref={this.rolled}>rolled-up</Word> mag-
          </Line>
          <Line>
            azine or it may have been my lack of dynamism and ambition. Still,
          </Line>
          <Line>
            he praised me at a department meeting for my lesson on the parts of
          </Line>
          <Line>
            a sentence where I used a ballpoint pen as a visual aid<Word ref={this.period}>.</Word>
          </Line>
          <Line>
            This is the plastic tube that holds the ink. If you removed this tube
          </Line>
          <Line>
            from the pen what would happen?
          </Line>
          <Line>
            My students look at me as if they can’t believe <Word ref={this.imAsking}>I’m asking</Word> such a
          </Line>
          <Line>
            dumb-ass question. Man, you wouldn’t be able to write.
          </Line>
          <Line>
            OK. Now <Word ref={this.whatIs}>what is this</Word> I’m holding in my hand?
          </Line>
          <Line>
            Again the <Word ref={this.patient}>patient</Word> look. That’s a spring, man.
          </Line>
          <Line>
            And what would happen if we removed the spring?
          </Line>
          <Line>
            When you try to push the tube out it won’t write because there’s
          </Line>
          <Line>
            no spring to push it and keep its <Word ref={this.littleNose}>little nose</Word> out there where all the
          </Line>
          <Line>
            writing is done and then you get in a lotta trouble because you can’t
          </Line>
          <Line>
            write your homework and the teacher’s gonna think <Word ref={this.youreCrazy}>you’re crazy</Word> if
          </Line>
          <Line>
            you come in telling him about missing springs or tubes<Word ref={this.period2}>.</Word>
          </Line>
          <Line>
            Now look at what I’m writing on the board. “The spring makes
          </Line>
          <Line>
            the pen work.” <Word ref={this.what}>What</Word> is the subject of this sentence? In other words<Word ref={this.comma2}>,</Word>
          </Line>
          <Line>
            <Word ref={this.whatAre}>what are we</Word> talking about in this sentence<Word ref={this.qmark}>?</Word>
          </Line>
          <Line>
            The pen.
          </Line>
        </Page>
      </SVGContainer>
    </PoemsLayout>
  }
}

export default WeMoveAlong
