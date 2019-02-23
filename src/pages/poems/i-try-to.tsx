import * as React from 'react'
import Draw from './Draw'
import PoemsLayout from '../../layouts/PoemsLayout'

class ITryTo extends Draw {
  render() {
    const { Line, Page, SVGContainer, Word } = this
    return <PoemsLayout>
      <SVGContainer ref={this.svg}>
        <Page bg="mediumorchid">
          <Line indent={true}>
            <Word>I try to</Word> explain the simple idea of research.
          </Line>
          <Line indent={true}>
            First, you choose a topic.
          </Line>
          <Line indent={true}>
            What’s that?
          </Line>
          <Line indent={true}>
            <Word>Think of</Word> something <Word>you</Word>’re interested in, maybe a problem both-
          </Line>
          <Line>
            ering you and people in general. <Word>You could write</Word> about capitalism,
          </Line>
          <Line>
            religion, abortion, children, politics, education. Some of you come
          </Line>
          <Line>
            from Haiti or Cuba. Two <Word>rich</Word> subjects. You could write about
          </Line>
          <Line>
            <Word>voodoo</Word> or the Bay of Pigs. You <Word>could look</Word> at some aspect of your
          </Line>
          <Line>
            country, human <Word>right</Word>s, for instance, do a little research, look <Word>at</Word> the
          </Line>
          <Line>
            pros and cons, think about it, come to a conclusion.
          </Line>
          <Line indent={true}>
            Excuse <Word>me</Word>, professor, what’s pros and cons?
          </Line>
          <Line indent={true}>
            Pro is for, con is against.
          </Line>
          <Line indent={true}>
            <Word>Oh.</Word>
          </Line>
          <Line indent={true}>
            The <Word>Oh</Word> means they have no notion of what I am talking about.
          </Line>
          <Line>
            <Word>I have</Word> to backtrack, come at it from <Word>another angle. I</Word> ask them where
          </Line>
          <Line>
            they stand on capital punishment. The looks <Word>tell</Word> me the<Word>y</Word> don’t kn<Word>o</Word>w
          </Line>
          <Line>
            where they stand beca<Word>u</Word>se they don’<Word>t</Word> kn<Word>o</Word>w what I’m talking about.
          </Line>
          <Line indent={true}>
            Capital punishment is the execution of people by hanging, elec-
          </Line>
          <Line>
            trocution, gas<Word>sing</Word>, shooting or garroting.
          </Line>
          <Line indent={true}>
            <Word>What’s that?</Word>
          </Line>
          <Line indent={true}>
            <Word>A</Word> kind of <Word>strangling</Word> they have mostly in Spain.
          </Line>
          <Line indent={true}>
            They ask me to write it on the board. They <Word>scribble</Word> it in their
          </Line>
          <Line>
            notebooks and I make a mental note that if ever a class <Word>dragged</Word> I’d
          </Line>
          <Line>
            turn immediately to the vari<Word>ou</Word>s me<Word>t</Word>hods of execution.
          </Line>
          <Line indent={true}>
            Vivian from Haiti raises her hand. That’s wrong, that executing,
          </Line>
          <Line>
            <Word>but I think it’s OK</Word> for the other thing, the one about the babies, Oh,
          </Line>
          <Line>
            yeah, the abortion. They should be shot.
          </Line>
          <Line indent={true}>
            All right, Vivian. Why don’t you write that in your research paper?
          </Line>
          <Line indent={true}>
            Me? Write down what I’m saying? Who cares what I’m saying?
          </Line>
          <Line>
            I’m nobody, professor. <Word>Nobody</Word>.
          </Line>
          <Line indent={true}>
            Their faces are blank. They don’t understand. How could they?
          </Line>
          <Line>
            What’s th<Word>is</Word> about the other side of a <Word>s</Word>t<Word>o</Word>ry? Nobody ever told them
          </Line>
          <Line>
            they had a right to an opinion.
          </Line>
          <Line indent={true}>
            They’re not <Word>shy</Word> about speaking up in class, but putting words on
          </Line>
        </Page>
      </SVGContainer>>
    </PoemsLayout>
  }
}

export default ITryTo
