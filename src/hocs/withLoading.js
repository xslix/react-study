/* eslint-disable react/no-this-in-sfc */
import * as React from 'react'

const LoadingStatus = 0
const ErrorStatus = 1
const SuccessStatus = 2

export function withLoading(loadingF, LoadingComponent, ErrorComponent) {
	return function(Component) {
		class C extends React.Component {
			state = {
				data: null,
				status: LoadingStatus,
			}

			componentDidMount() {
				this.loading()
			}

			async loading() {
				try {
					const data = await loadingF(this.props)
					this.setState({
						data,
						status: SuccessStatus,
					})
				} catch (_) {
					this.setState({
						status: ErrorStatus,
					})
				}
			}

			render() {
				switch (this.state.status) {
					case LoadingStatus:
						return <LoadingComponent />
					case ErrorStatus:
						return <ErrorComponent />
					default:
						return <Component {...this.props} loadingData={this.state.data} />
				}
			}
		}

		return C
	}
}
