import * as React from 'react'
import * as d3 from 'd3'
import styled from '@emotion/styled'

const width = 690

const SVG = styled.svg`
  width: ${width}px;
  height: 940px;
  margin: 2em auto;
  display: flex;
`
const Page = styled.foreignObject<{ bg: string }>(
  {
    width: '100%',
    height: '100%',
    padding: '80px',
    position: 'relative',
    color: '#353839',
    lineHeight: '1.5rem'
  },
  props => ({
    backgroundColor: props.bg
  })
)
const Line = styled.div<{ indent?: boolean }>({}, props => ({
  paddingLeft: props.indent ? '1em' : ''
}))

const Word = styled.span`
  padding: 0em 0.2em;
  background-color: #fffff0;
  border: 0.1em solid #353839;
`

interface Point {
  x: number
  y: number
}

class Draw extends React.Component<{}, {}> {
  public static width: number = width

  public static top(el: React.RefObject<HTMLElement>): Point {
    if (el === null || !el.current) {
      return { x: 0, y: 0 }
    }
    const c = el.current
    return {
      x: c.offsetLeft + c.offsetWidth / 2.0,
      y: c.offsetTop
    }
  }

  public static left(el: React.RefObject<HTMLElement>): Point {
    if (el === null || !el.current) {
      return { x: 0, y: 0 }
    }
    const c = el.current
    return {
      x: c.offsetLeft,
      y: c.offsetTop + c.offsetHeight / 2.0
    }
  }

  public static bottom(el: React.RefObject<HTMLElement>): Point {
    if (el === null || !el.current) {
      return { x: 0, y: 0 }
    }
    const c = el.current
    return {
      x: c.offsetLeft + c.offsetWidth / 2.0,
      y: c.offsetTop + c.offsetHeight
    }
  }

  public static right(el: React.RefObject<HTMLElement>): Point {
    if (el === null || !el.current) {
      return { x: 0, y: 0 }
    }
    const c = el.current
    return {
      x: c.offsetLeft + c.offsetWidth,
      y: c.offsetTop + c.offsetHeight / 2.0
    }
  }

  protected svg: React.RefObject<SVGSVGElement> = React.createRef()

  protected SVGContainer: typeof SVG = SVG

  protected Page: typeof Page = Page

  protected Line: typeof Line = Line

  protected Word: typeof Word = Word

  protected draw(x1: number, y1: number, x2: number, y2: number) {
    if (this.svg === null || !this.svg.current) {
      return null
    }

    return d3
      .select(this.svg.current)
      .append('line')
      .attr('x1', x1)
      .attr('x2', x2)
      .attr('y1', y1)
      .attr('y2', y2)
      .attr('style', 'stroke: #000000; stroke-width: 2')
  }

  protected cornerX(from: Point, to: Point) {
    const one = { x: to.x, y: from.y }
    this.lines(from, one, to)
  }

  protected cornerY(from: Point, to: Point) {
    const one = { x: from.x, y: to.y }
    this.lines(from, one, to)
  }

  protected humpLeft(from: Point, to: Point) {
    const bigHump = Math.min(from.x, to.x)
    const one = { x: bigHump - 10, y: from.y }
    const two = { x: one.x, y: to.y }
    this.lines(from, one, two, to)
  }

  protected humpRight(from: Point, to: Point) {
    const bigHump = Math.max(from.x, to.x)
    const one = { x: bigHump + 10, y: from.y }
    const two = { x: one.x, y: to.y }
    this.lines(from, one, two, to)
  }

  protected humpTop(from: Point, to: Point) {
    const one = { x: from.x, y: from.y - 10 }
    const two = { x: to.x, y: from.y - 10 }
    this.lines(from, one, two, to)
  }

  protected line(from: Point, to: Point) {
    this.draw(from.x, from.y, to.x, to.y)
  }

  protected lines(...points: Point[]) {
    for (let i = 0; i < points.length - 1; i += 1) {
      this.line(points[i], points[i + 1])
    }
  }

  protected zigX(from: Point, to: Point) {
    const one = { x: (from.x - to.x) / 2 + to.x, y: from.y }
    const two = { x: one.x, y: to.y }
    this.lines(from, one, two, to)
  }

  protected zigY(from: Point, to: Point) {
    const one = { x: from.x, y: (to.y - from.y) / 2 + from.y }
    const two = { x: to.x, y: one.y }
    this.lines(from, one, two, to)
  }
}

export default Draw
