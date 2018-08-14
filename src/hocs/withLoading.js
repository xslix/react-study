/* eslint-disable react/no-this-in-sfc */
import React from 'react'

export function withLoading(loadingFunction, ProcessingComponent, ErrorComponent) {
	return function(Component) {
		class C extends React.Component {
			state = {
				data: null,
				status: 'Loading',
			}

			componentDidMount() {
				this.loading()
			}

			async loading() {
				try {
					const data = await loadingFunction(this.props)
					this.setState({
						data,
						status: 'Success',
					})
				} catch (_) {
					this.setState({status: 'Error'})
				}
			}

			render() {
				switch (this.state.status) {
					case 'Loading':
						return <ProcessingComponent />
					case 'Success':
						return <Component {...this.props} loadingData={this.state.data} />
					default:
						return <ErrorComponent />
				}
			}
		}
		return C
	}
}
