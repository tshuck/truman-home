import * as React from 'react'
import * as d3 from 'd3';
import styled from '@emotion/styled'

const SVG = styled.svg`
  width: 690px;
  height: 940px;
  margin: 5em auto;
`
const Page = styled.foreignObject<{ bg: string }>(
{
  width: '100%',
  height: '100%',
  padding: '80px',
  position: 'relative',
  color: '#353839',
},
  props => ({
    backgroundColor: props.bg
  })
)
const Line = styled.div<{ indent?: boolean }>({},
  props => ({
    'paddingLeft': props.indent ? "1em" : ''
  })
)

const Word = styled.span`
  padding: 0em 0.2em;
  background-color: #FFFFF0;
  border: .1em solid #353839;
`

type Point = {
  x: number
  y: number
}

class Draw extends React.Component<{}, {}> {
  protected svg: React.RefObject<SVGSVGElement> = React.createRef()
  protected SVGContainer: typeof SVG = SVG
  protected Page: typeof Page = Page
  protected Line: typeof Line = Line
  protected Word: typeof Word = Word

  draw (x1: number, y1: number, x2: number, y2: number) {
    if (this.svg === null || !this.svg.current) {
      return;
    }

    return (
      d3
        .select(this.svg.current)
        .append("line")
        .attr("x1", x1)
        .attr("x2", x2)
        .attr("y1", y1)
        .attr("y2", y2)
        .attr("style", "stroke: #000000; stroke-width: 2")
    )
  }

  top (el: React.RefObject<HTMLElement>): Point {
    if (el === null || !el.current) {
      return { x: 0, y: 0 }
    }
    const c = el.current
    return {
      x: c.offsetLeft + (c.offsetWidth / 2.0),
      y: c.offsetTop,
    }
  }

  left (el: React.RefObject<HTMLElement>): Point {
    if (el === null || !el.current) {
      return { x: 0, y: 0 }
    }
    const c = el.current
    return {
      x: c.offsetLeft,
      y: c.offsetTop + (c.offsetHeight / 2.0),
    }
  }

  bottom (el: React.RefObject<HTMLElement>): Point {
    if (el === null || !el.current) {
      return { x: 0, y: 0 }
    }
    const c = el.current
    return {
      x: c.offsetLeft + (c.offsetWidth / 2.0),
      y: c.offsetTop + c.offsetHeight,
    }
  }

  right (el: React.RefObject<HTMLElement>): Point {
    if (el === null || !el.current) {
      return { x: 0, y: 0 }
    }
    const c = el.current
    return {
      x: c.offsetLeft + c.offsetWidth,
      y: c.offsetTop + (c.offsetHeight / 2.0),
    }
  }

  cornerX(from: Point, to: Point) {
    const one = { x: to.x, y: from.y}
    this.lines(from, one, to)
  }

  cornerY(from: Point, to: Point) {
    const one = { x: from.x, y: to.y}
    this.lines(from, one, to)
  }

  humpLeft(from: Point, to: Point) {
    const one = { x: from.x - 10, y: from.y }
    const two = { x: one.x, y: to.y }
    this.lines(from, one, two, to)
  }

  humpRight(from: Point, to: Point) {
    const one = { x: from.x + 10, y: from.y }
    const two = { x: one.x, y: to.y }
    this.lines(from, one, two, to)
  }

  humpTop(from: Point, to: Point) {
    const one = { x: from.x, y: from.y - 10 }
    const two = { x: to.x, y: from.y - 10 }
    this.lines(from, one, two, to)
  }

  line(from: Point, to: Point) {
    this.draw(from.x, from.y, to.x, to.y)
  }

  lines(...points: Point[]) {
    for (var i = 0; i < points.length - 1; i++) {
      this.line(points[i], points[i + 1])
    }
  }

  zigX(from: Point, to: Point) {
    const one = { x: ((from.x - to.x) / 2) + to.x, y: from.y }
    const two = { x: one.x, y: to.y }
    this.lines(from, one, two, to)
  }

  zigY(from: Point, to: Point) {
    const one = { x: from.x, y: ((to.y - from.y) / 2) + from.y }
    const two = { x: to.x, y: one.y }
    this.lines(from, one, two, to)
  }
}

export default Draw
