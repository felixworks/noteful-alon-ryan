import React, { Component } from 'react'

export default class ListNoteErrorBoundary extends Component {
  state ={
      hasError: false
  }

  static getDerivedStateFromError() {
      return {hasError: true}
  }

  render() {
    if(this.state.hasError) {
      return (
        <li className="note">
          <h2>Unable to Render Note with No Content</h2>
        </li>
      )
    } else {
        return this.props.children
    }
  }
}
