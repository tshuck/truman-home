import * as React from 'react'
import Draw from './Draw'

class WeConfessed extends Draw {
  private weConfessed: React.RefObject<HTMLSpanElement> = React.createRef()

  private period: React.RefObject<HTMLSpanElement> = React.createRef()

  private talkingAbout: React.RefObject<HTMLSpanElement> = React.createRef()

  private your: React.RefObject<HTMLSpanElement> = React.createRef()

  private first: React.RefObject<HTMLSpanElement> = React.createRef()

  private con: React.RefObject<HTMLSpanElement> = React.createRef()

  private science: React.RefObject<HTMLSpanElement> = React.createRef()

  private colon: React.RefObject<HTMLSpanElement> = React.createRef()

  private the: React.RefObject<HTMLSpanElement> = React.createRef()

  private nameWas: React.RefObject<HTMLSpanElement> = React.createRef()

  private hell: React.RefObject<HTMLSpanElement> = React.createRef()

  private andWeWere: React.RefObject<HTMLSpanElement> = React.createRef()

  private because: React.RefObject<HTMLSpanElement> = React.createRef()

  private weDoubted: React.RefObject<HTMLSpanElement> = React.createRef()

  private theOther: React.RefObject<HTMLSpanElement> = React.createRef()

  private strange: React.RefObject<HTMLSpanElement> = React.createRef()

  private dream: React.RefObject<HTMLSpanElement> = React.createRef()

  private s: React.RefObject<HTMLSpanElement> = React.createRef()

  private itWasStrange: React.RefObject<HTMLSpanElement> = React.createRef()

  private becauseEveryone: React.RefObject<HTMLSpanElement> = React.createRef()

  private usedTo: React.RefObject<HTMLSpanElement> = React.createRef()

  private pictureHim: React.RefObject<HTMLSpanElement> = React.createRef()

  private smilingAway: React.RefObject<HTMLSpanElement> = React.createRef()

  private chokingTheLife: React.RefObject<HTMLSpanElement> = React.createRef()

  private you: React.RefObject<HTMLSpanElement> = React.createRef()

  private colon2: React.RefObject<HTMLSpanElement> = React.createRef()

  private everythingIs: React.RefObject<HTMLSpanElement> = React.createRef()

  private sinsFestering: React.RefObject<HTMLSpanElement> = React.createRef()

  private or: React.RefObject<HTMLSpanElement> = React.createRef()

  private aFaintWhisper: React.RefObject<HTMLSpanElement> = React.createRef()

  private past: React.RefObject<HTMLSpanElement> = React.createRef()

  private whenYoure: React.RefObject<HTMLSpanElement> = React.createRef()

  private pureDazzling: React.RefObject<HTMLSpanElement> = React.createRef()

  private but: React.RefObject<HTMLSpanElement> = React.createRef()

  private stinkYou: React.RefObject<HTMLSpanElement> = React.createRef()

  private saveYourself: React.RefObject<HTMLSpanElement> = React.createRef()

  private theOnly: React.RefObject<HTMLSpanElement> = React.createRef()

  private wordsThatMean: React.RefObject<HTMLSpanElement> = React.createRef()

  private thingToYou: React.RefObject<HTMLSpanElement> = React.createRef()

  private period2: React.RefObject<HTMLSpanElement> = React.createRef()

  private giveMyself: React.RefObject<HTMLSpanElement> = React.createRef()

  private periodToTalking() {
    const from = Draw.right(this.period)
    const to = Draw.top(this.talkingAbout)

    const one = { x: from.x + 20, y: from.y }
    const two = { x: one.x, y: (from.y - to.y) / 2 + to.y }
    const three = { x: to.x, y: two.y }

    this.lines(from, one, two, three, to)
  }

  private theToName() {
    const from = Draw.right(this.the)
    const to = Draw.left(this.nameWas)

    const one = { x: from.x + 100, y: from.y }
    const two = { x: one.x, y: one.y - 150 }
    const three = { x: two.x - 500, y: two.y }
    const four = { x: three.x, y: to.y }

    this.lines(from, one, two, three, four, to)
  }

  private nameToHell() {
    const from = Draw.right(this.nameWas)
    const to = Draw.left(this.hell)

    const one = { x: from.x + 40, y: from.y }
    const two = { x: one.x, y: to.y }
    this.lines(from, one, two, to)
  }

  private hellToAndWe() {
    const from = Draw.right(this.hell)
    const to = Draw.bottom(this.andWeWere)

    const one = { x: from.x + 40, y: from.y }
    const two = { x: one.x, y: one.y + 50 }
    const three = { x: to.x, y: two.y }

    this.lines(from, one, two, three, to)
  }

  private becauseToWe() {
    const from = Draw.bottom(this.because)
    const to = Draw.bottom(this.weDoubted)

    const one = { x: from.x, y: from.y + 60 }
    const two = { x: to.x, y: one.y }

    this.lines(from, one, two, to)
  }

  private weToTheOther() {
    const from = Draw.right(this.weDoubted)
    const to = Draw.bottom(this.theOther)

    const one = { x: from.x + 60, y: from.y }
    const two = { x: one.x, y: one.y + 70 }
    const three = { x: to.x, y: two.y }

    this.lines(from, one, two, three, to)
  }

  private sToItWas() {
    const from = Draw.right(this.s)
    const to = Draw.top(this.itWasStrange)

    const one = { x: from.x + 20, y: from.y }
    const two = { x: one.x, y: to.y }

    this.lines(from, one, two)
  }

  private usedToToPicture() {
    const from = Draw.right(this.usedTo)
    const to = Draw.left(this.pictureHim)

    const one = { x: from.x + 20, y: from.y }
    const two = { x: one.x, y: one.y + 72 }
    const three = { x: to.x - 140, y: two.y }
    const four = { x: three.x, y: to.y }

    this.lines(from, one, two, three, four, to)
  }

  private colon2ToEverything() {
    const from = Draw.right(this.colon2)
    const to = Draw.bottom(this.everythingIs)

    const one = { x: from.x + 80, y: from.y }
    const two = { x: one.x, y: one.y + 47 }
    const three = { x: two.x - 270, y: two.y }
    const four = { x: three.x, y: three.y + 20 }
    const five = { x: to.x, y: four.y }

    this.lines(from, one, two, three, four, five, to)
  }

  private sinsToOr() {
    const from = Draw.bottom(this.sinsFestering)
    const to = Draw.left(this.or)

    const one = { x: from.x, y: from.y + 35 }
    const two = { x: one.x - 170, y: one.y }
    const three = { x: two.x, y: two.y + 25 }
    const four = { x: to.x - 20, y: three.y }
    const five = { x: four.x, y: to.y }

    this.lines(from, one, two, three, four, five, to)
  }

  private orToAFaint() {
    const from = Draw.right(this.or)
    const to = Draw.left(this.aFaintWhisper)

    const one = { x: from.x + 20, y: from.y }
    const two = { x: one.x, y: one.y + 70 }
    const three = { x: two.x + 30, y: two.y }
    const four = { x: three.x + 20, y: to.y }

    this.lines(from, one, two, three, four, to)
  }

  private pastToWhen() {
    const from = Draw.right(this.past)
    const to = Draw.left(this.whenYoure)

    const one = { x: from.x + 30, y: from.y }
    const two = { x: one.x, y: one.y + 140 }
    const three = { x: to.x - 30, y: two.y }
    const four = { x: three.x, y: to.y }

    this.lines(from, one, two, three, four, to)
  }

  private whiteToBut() {
    const from = Draw.right(this.pureDazzling)
    const to = Draw.left(this.but)

    const one = { x: from.x + 60, y: from.y }
    const two = { x: one.x, y: one.y + 165 }
    const three = { x: to.x - 110, y: two.y }
    const four = { x: three.x, y: to.y }

    this.lines(from, one, two, three, four, to)
  }

  private stinkToSave() {
    const from = Draw.right(this.stinkYou)
    const to = Draw.left(this.saveYourself)

    const one = { x: from.x + 50, y: from.y }
    const two = { x: one.x, y: one.y + 55 }
    const three = { x: two.x - 320, y: two.y }
    const four = { x: three.x, y: three.y + 40 }
    const five = { x: to.x - 30, y: four.y }
    const six = { x: five.x, y: to.y }

    this.lines(from, one, two, three, four, five, six, to)
  }

  public componentDidMount() {
    const { left, right, top, bottom } = Draw

    this.line(right(this.weConfessed), left(this.period))
    this.periodToTalking()
    this.cornerY(bottom(this.talkingAbout), right(this.your))
    this.humpLeft(left(this.your), left(this.first))
    this.line(right(this.first), left(this.con))
    // TODO:  Better convey con- to science
    this.line(right(this.science), left(this.colon))
    this.line(right(this.colon), left(this.the))
    this.theToName()
    this.nameToHell()
    this.hellToAndWe()
    this.line(right(this.andWeWere), left(this.because))
    this.becauseToWe()
    this.weToTheOther()
    this.cornerX(right(this.theOther), top(this.strange))
    this.zigY(bottom(this.strange), top(this.dream))
    this.line(right(this.dream), left(this.s))
    this.sToItWas()
    this.cornerX(left(this.itWasStrange), top(this.becauseEveryone))
    this.line(right(this.becauseEveryone), left(this.usedTo))
    this.usedToToPicture()
    this.line(right(this.pictureHim), left(this.smilingAway))
    this.cornerY(bottom(this.smilingAway), right(this.chokingTheLife))
    this.zigY(bottom(this.chokingTheLife), top(this.you))
    this.line(right(this.you), left(this.colon2))
    this.colon2ToEverything()
    this.cornerY(top(this.everythingIs), left(this.sinsFestering))
    this.sinsToOr()
    this.orToAFaint()
    this.line(right(this.aFaintWhisper), left(this.past))
    this.pastToWhen()
    this.line(right(this.whenYoure), left(this.pureDazzling))
    this.whiteToBut()
    this.line(right(this.but), left(this.stinkYou))
    this.stinkToSave()
    this.line(right(this.saveYourself), left(this.theOnly))
    this.line(right(this.theOnly), left(this.wordsThatMean))
    // TODO:  Better convey any- to thing
    this.line(right(this.thingToYou), left(this.period2))
    this.cornerX(right(this.period2), top(this.giveMyself))
  }

  public render() {
    const { Line, Page, SVGContainer, Word } = this
    return (
      <SVGContainer ref={this.svg}>
        <Page bg="#CD5C5C">
          <Line indent>
            <Word ref={this.weConfessed}>We confessed</Word> to breaking all the Ten Commandments<Word ref={this.period}>.</Word> If you
          </Line>
          <Line>said you committed adultery or coveted your neighbor’s wife the</Line>
          <Line>
            master knew you didn’t know what you were <Word ref={this.talkingAbout}>talking about</Word>, Don’t
          </Line>
          <Line>
            get above <Word ref={this.your}>your</Word>self, boy, and moved on to the next penitent.
          </Line>
          <Line indent>
            After <Word ref={this.first}>First</Word> Communion we continued Examination of <Word ref={this.con}>Con-</Word>
          </Line>
          <Line>
            <Word ref={this.science}>science</Word> for the next sacrament<Word ref={this.colon}>:</Word> Confirmation.{' '}
            <Word ref={this.the}>The</Word> priest said Exam-
          </Line>
          <Line>
            ination of Conscience and confession would save us from <Word ref={this.hell}>hell</Word>. His
          </Line>
          <Line>
            <Word ref={this.nameWas}>name was</Word> Father White <Word ref={this.andWeWere}>and we were interested</Word> in him{' '}
            <Word ref={this.because}>because</Word> one
          </Line>
          <Line>of the boys said he never wanted to be a priest at all. His mother</Line>
          <Line>
            forced him into the priesthood. <Word ref={this.weDoubted}>We doubted</Word> that boy, but he said he
          </Line>
          <Line>knew one of the maids at the priests’ house and she said Father White</Line>
          <Line>
            got drunk at dinner and told <Word ref={this.theOther}>the other</Word> priests his only dream was to
          </Line>
          <Line>grow up and drive the bus that went from Limerick to Galway and</Line>
          <Line>
            back but his mother wouldn’t let him. It was <Word ref={this.strange}>strange</Word> to be examined
          </Line>
          <Line>by someone who became a priest because his mother made him. I</Line>
          <Line>
            wondered if the <Word ref={this.dream}>dream</Word> of the bu<Word ref={this.s}>s</Word> was in his head while he stood at
          </Line>
          <Line>
            the altar saying Mass<Word ref={this.itWasStrange}>. It was strange, also,</Word> to think of a priest getting
          </Line>
          <Line>
            drunk, <Word ref={this.becauseEveryone}>because everyone</Word> knows they’re not supposed to. I{' '}
            <Word ref={this.usedTo}>used to</Word>
          </Line>
          <Line>
            look at buses passing by and <Word ref={this.pictureHim}>picture him</Word> up there,{' '}
            <Word ref={this.smilingAway}>smiling away</Word> and
          </Line>
          <Line>
            no priestly collar <Word ref={this.chokingTheLife}>choking the life out of</Word> him.
          </Line>
          <Line indent>When you get into the habit of examining your conscience it’s</Line>
          <Line>
            hard to stop, especially when <Word ref={this.you}>you</Word>’re an Irish Catholic boy<Word ref={this.colon2}>:</Word> If you
            do
          </Line>
          <Line>
            bad things you look into your soul, and there are the <Word ref={this.sinsFestering}>sins, festering</Word>.
          </Line>
          <Line>
            <Word ref={this.everythingIs}>Everything is either</Word> a sin <Word ref={this.or}>or</Word> not a sin and that’s an idea you
            might
          </Line>
          <Line>carry in your head the rest of your life. Then when you grow up and</Line>
          <Line>
            drift away from the church, Mea culpa is <Word ref={this.aFaintWhisper}>a faint whisper</Word> in your{' '}
            <Word ref={this.past}>past.</Word>
          </Line>
          <Line>It’s still there, but now you’re older and not so easily frightened.</Line>
          <Line indent>
            <Word ref={this.whenYoure}>When you’re</Word> in a state of grace the soul is a{' '}
            <Word ref={this.pureDazzling}>pure dazzling white</Word>
          </Line>
          <Line>
            surface, <Word ref={this.but}>but</Word> your sins create abscesses that ooze and{' '}
            <Word ref={this.stinkYou}>stink. You try to</Word>
          </Line>
          <Line>
            <Word ref={this.saveYourself}>save yourself with</Word> Mea culpa, <Word ref={this.theOnly}>the only</Word> Latin{' '}
            <Word ref={this.wordsThatMean}>words that mean any-</Word>
          </Line>
          <Line>
            <Word ref={this.thingToYou}>thing to you</Word> or God<Word ref={this.period2}>.</Word>
          </Line>
          <Line indent>If I could travel to my twenty-seventh year, my first teaching</Line>
          <Line>
            year, I’d take me out for a steak, a baked potato, a pint of stout. <Word>I'd</Word>
          </Line>
          <Line>
            <Word ref={this.giveMyself}>give myself a good talking to. For Christ’s sake, kid, straighten up.</Word>
          </Line>
        </Page>
      </SVGContainer>
    )
  }
}

export default WeConfessed
