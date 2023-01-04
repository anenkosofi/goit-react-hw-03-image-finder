import { Component } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import { Wrapper } from './App.styled';
import { GlobalStyle } from './GlobalStyle';
import { fetchImages } from 'services/image-api';
import { Searchbar } from './Searchbar';
import { Notification } from './Notification';
import { ImageGallery } from './ImageGallery';
import { Modal } from './Modal';
import { Button } from './Button';

export class App extends Component {
  state = {
    page: 1,
    query: '',
    images: [],
    largeImage: '',
    error: '',
    status: 'idle',
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.query !== this.state.query
    ) {
      this.setState({ status: 'pending' });
      fetchImages({ query: this.state.query, page: this.state.page })
        .then(({ total, hits }) => {
          if (total) {
            this.setState(prevState => ({
              images: [...prevState.images, ...hits],
              status: 'resolved',
            }));
          } else {
            this.setState({ status: 'rejected' });
          }
        })
        .catch(error => this.setState({ error, status: 'rejected' }));
    }
  }

  handleFormSubmit = e => {
    e.preventDefault();

    if (!e.target.elements.query.value) {
      alert('Search box cannot be empty. Please enter the word.');
      return;
    }

    this.setState({
      page: 1,
      query: e.target.elements.query.value,
      images: [],
    });

    e.target.reset();
  };

  loadMore = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      status: 'pending',
    }));
  };

  openModal = image => {
    this.setState({ largeImage: image });
  };

  closeModal = () => {
    this.setState({ largeImage: '' });
  };

  render() {
    if (this.state.status === 'idle') {
      return (
        <Wrapper>
          <GlobalStyle />
          <Searchbar onSubmit={this.handleFormSubmit} />
          <Notification message="There are no images yet." />
        </Wrapper>
      );
    }
    if (this.state.status === 'pending') {
      return (
        <Wrapper>
          <GlobalStyle />
          <Searchbar onSubmit={this.handleFormSubmit} />
          <ImageGallery items={this.state.images} onClick={this.openModal} />
          <ThreeDots
            height="50"
            width="50"
            radius="9"
            color="#3f51b5"
            ariaLabel="three-dots-loading"
            wrapperStyle={{
              margin: '0 auto',
            }}
            visible={true}
          />
        </Wrapper>
      );
    }
    if (this.state.status === 'rejected') {
      return (
        <Wrapper>
          <GlobalStyle />
          <Searchbar onSubmit={this.handleFormSubmit} />
          <Notification
            message={`No results containing ${this.state.query} were found.`}
          />
        </Wrapper>
      );
    }
    if (this.state.status === 'resolved') {
      return (
        <Wrapper>
          <GlobalStyle />
          <Searchbar onSubmit={this.handleFormSubmit} />
          <ImageGallery items={this.state.images} onClick={this.openModal} />
          {this.state.largeImage.length > 0 && (
            <Modal onClose={this.closeModal} image={this.state.largeImage} />
          )}
          <Button onClick={this.loadMore} />
        </Wrapper>
      );
    }
  }
}
