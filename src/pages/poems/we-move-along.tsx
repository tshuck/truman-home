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

  private moveToA() {
    const from = Draw.top(this.move)
    const to = Draw.left(this.a)

    const one = { x: from.x, y: from.y - 10 }
    const two = { x: to.x - 40, y: one.y }
    const three = { x: two.x, y: to.y }
    this.lines(from, one, two, three, to)
  }

  private rolledToPeriod() {
    const from = Draw.right(this.rolled)
    const to = Draw.top(this.period)

    const one = { x: from.x + 10, y: from.y }
    const two = { x: one.x, y: (to.y - from.y) / 2 + from.y }
    const three = { x: to.x, y: two.y }
    const four = { x: three.x, y: to.y }

    this.lines(from, one, two, three, four)
  }

  public componentDidMount() {
    const { left, right, top, bottom } = Draw
    this.line(right(this.we), left(this.move))
    this.moveToA()
    this.line(right(this.a), left(this.long))
    this.cornerX(right(this.long), top(this.comma))
    this.cornerX(left(this.comma), top(this.shook))
    this.cornerX(right(this.shook), top(this.with))
    this.cornerY(bottom(this.with), right(this.power))

    this.cornerY(bottom(this.i), left(this.allowed))
    this.humpTop(top(this.allowed), top(this.aLittle))
    this.zigY(bottom(this.aLittle), top(this.a2))
    this.zigX(right(this.a2), left(this.shoelace))
    this.line(right(this.shoelace), left(this.rolled))
    this.rolledToPeriod()

    this.zigY(bottom(this.imAsking), top(this.whatIs))
    this.humpRight(right(this.whatIs), right(this.patient))
    this.humpLeft(left(this.patient), left(this.littleNose))
    this.cornerY(bottom(this.littleNose), left(this.youreCrazy))
    this.cornerY(bottom(this.youreCrazy), right(this.period2))

    this.line(right(this.what), left(this.comma2))
    this.humpTop(top(this.comma2), top(this.whatAre))
    this.line(right(this.whatAre), left(this.qmark))
  }

  public render() {
    const { Line, Page, SVGContainer, Word } = this
    return (
      <PoemsLayout>
        <SVGContainer ref={this.svg}>
          <Page bg="#555555">
            <Line indent>
              <Word ref={this.we}>We</Word> don’t sit on our asses here, he said. We <Word ref={this.move}>move</Word> on and up. And
            </Line>
            <Line>
              wh<Word ref={this.a}>a</Word>t are your <Word ref={this.long}>long</Word>-range plans?
            </Line>
            <Line indent>
              I don’t know. I suppose I just came here to be a teacher<Word ref={this.comma}>,</Word> I said.
            </Line>
            <Line indent>
              He <Word ref={this.shook}>shook</Word> his head, couldn’t understand my lack of ambition. I
            </Line>
            <Line>wasn’t dynamic enough. Because of him those four teachers taking</Line>
            <Line>courses were moving on and up and out. That’s what he said. Why</Line>
            <Line>
              should they spend their lives in the classroom <Word ref={this.with}>with</Word> kids when they
            </Line>
            <Line>
              could travel the corridors of <Word ref={this.power}>power</Word>?
            </Line>
            <Line indent>
              <Word ref={this.i}>I</Word> felt brave for a moment and asked him, If everyone moved on
            </Line>
            <Line>and up and out who would teach the children?</Line>
            <Line indent>
              He ignored me, <Word ref={this.allowed}>allowed</Word> himself <Word ref={this.aLittle}>a little smile</Word> with a mouth
              that
            </Line>
            <Line>had no lips.</Line>
            <Line indent>
              I l<Word ref={this.a2}>a</Word>sted one term, September to January, before he forced me out.
            </Line>
            <Line>
              It may have been the matter of the <Word ref={this.shoelace}>shoelace</Word>
              and the <Word ref={this.rolled}>rolled-up</Word> mag-
            </Line>
            <Line>azine or it may have been my lack of dynamism and ambition. Still,</Line>
            <Line>he praised me at a department meeting for my lesson on the parts of</Line>
            <Line>
              a sentence where I used a ballpoint pen as a visual aid<Word ref={this.period}>.</Word>
            </Line>
            <Line indent>This is the plastic tube that holds the ink. If you removed this tube</Line>
            <Line>from the pen what would happen?</Line>
            <Line indent>
              My students look at me as if they can’t believe <Word ref={this.imAsking}>I’m asking</Word> such a
            </Line>
            <Line>dumb-ass question. Man, you wouldn’t be able to write.</Line>
            <Line indent>
              OK. Now <Word ref={this.whatIs}>what is this</Word> I’m holding in my hand?
            </Line>
            <Line indent>
              Again the <Word ref={this.patient}>patient</Word> look. That’s a spring, man.
            </Line>
            <Line indent>And what would happen if we removed the spring?</Line>
            <Line indent>When you try to push the tube out it won’t write because there’s</Line>
            <Line>
              no spring to push it and keep its <Word ref={this.littleNose}>little nose</Word> out there where all the
            </Line>
            <Line>writing is done and then you get in a lotta trouble because you can’t</Line>
            <Line>
              write your homework and the teacher’s gonna think <Word ref={this.youreCrazy}>you’re crazy</Word> if
            </Line>
            <Line>
              you come in telling him about missing springs or tubes<Word ref={this.period2}>.</Word>
            </Line>
            <Line indent>Now look at what I’m writing on the board. “The spring makes</Line>
            <Line>
              the pen work.” <Word ref={this.what}>What</Word> is the subject of this sentence? In other words
              <Word ref={this.comma2}>,</Word>
            </Line>
            <Line>
              <Word ref={this.whatAre}>what are we</Word> talking about in this sentence<Word ref={this.qmark}>?</Word>
            </Line>
            <Line indent>The pen.</Line>
          </Page>
        </SVGContainer>
      </PoemsLayout>
    )
  }
}

export default WeMoveAlong
