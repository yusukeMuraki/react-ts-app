import React from 'react'

interface MetronomeProps {}

interface MetronomeStatus {
  bpm: number
  playing: boolean
  count: number
}
export class Metronome extends React.Component<
  MetronomeProps,
  MetronomeStatus
> {
  state = {
    bpm: 100,
    playing: false,
    count: 0,
  }

  click1 = new Audio(
    'https://daveceddia.com/freebies/react-metronome/click1.wav',
  )
  click2 = new Audio(
    'https://daveceddia.com/freebies/react-metronome/click1.wav',
  )
  timer = 0

  updateInterval = () => {
    const bmpSpeed = (60 * 1000) / this.state.bpm
    this.timer = window.setInterval(this.playClick, bmpSpeed)
  }

  handleBPM = (event: any) => {
    const bpm = event.target.value
    if (this.state.playing) {
      window.clearInterval(this.timer)
      this.updateInterval()
      this.setState({
        count: 0,
        bpm,
      })
    } else {
      this.setState({
        bpm,
      })
    }
  }

  playClick = () => {
    if (this.state.count === 0) this.click2.play()
    else this.click1.play()
    this.setState({
      count: this.state.count + 1,
    })
  }

  startStop = () => {
    if (this.state.playing) {
      window.clearInterval(this.timer)
      this.setState({
        playing: false,
      })
    } else {
      this.updateInterval()
      this.setState(
        {
          count: 0,
          playing: true,
        },
        this.playClick,
      )
    }
  }

  render() {
    return (
      <div>
        <h1>Metronome</h1>
        <button onClick={this.startStop}>
          {this.state.playing ? 'Stop' : 'Start'}
        </button>
        <div id="bpm-slider">
          <div>{this.state.bpm} BPM</div>
          <input
            type="range"
            min="60"
            max="240"
            value={this.state.bpm}
            onChange={this.handleBPM}
          />
        </div>
      </div>
    )
  }
}
