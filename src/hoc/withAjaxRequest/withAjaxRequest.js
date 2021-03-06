import React, { Component } from "react";
import LoadingSpinner from "../../components/main/LoadingSpinner/LoadingSpinner";
import Modal from "../../components/main/Modal/Modal";

const withAjaxRequest = (WrappedComponent, axios) => {
	return class extends Component {
		state = {
			ajaxRequestInProcess: false,
			ajaxRequestError: null,
		};

		componentDidMount = () => {
			this.reqInterceptor = axios.interceptors.request.use((request) => {
				this.setState({
					ajaxRequestInProcess: true,
					ajaxRequestError: null,
				});

				return request;
			});

			this.resInterceptor = axios.interceptors.response.use(
				(response) => {
					this.setState({
						ajaxRequestInProcess: false,
						ajaxRequestError: null,
					});
					return response;
				},
				(error) => {
					this.setState({
						ajaxRequestInProcess: false,
						ajaxRequestError: error,
					});
					return Promise.reject(error);
				}
			);
		};

		componentWillUnmount = () => {
			axios.interceptors.request.eject(this.reqInterceptor);
			axios.interceptors.response.eject(this.resInterceptor);
		};

		render = () => {
			let content = (
				<>
					<LoadingSpinner show={this.state.ajaxRequestInProcess} />
					<Modal
						show={this.state.ajaxRequestError !== null}
						onClickHandler={() => {
							this.setState({
								ajaxRequestInProcess: false,
								ajaxRequestError: null,
							});
						}}
					>
						{this.state.ajaxRequestError !== null
							? this.state.ajaxRequestError.message
							: null}
					</Modal>
					<WrappedComponent {...this.props}>
						{this.props.children}
					</WrappedComponent>
				</>
			);

			return content;
		};
	};
};

export default withAjaxRequest;
