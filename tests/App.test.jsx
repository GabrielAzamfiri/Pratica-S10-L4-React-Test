import { fireEvent, render, screen } from '@testing-library/react'
import App from '../src/App';
import userEvent from '@testing-library/user-event';




describe('App', () => {
   // *************** 7) SingleComment all’interno del DOM *******************************************************

   it(' istanze del componente SingleComment al interno del DOM', async () => {
    render(<App/>)
    
    const comments = await screen.queryAllByTestId("comment");
    
    expect(comments).toHaveLength(0);
   
    
  })

// **************************************1) welcome alert*****************************************************

  it('renders the App to see the welcome alert', () => {
    render(<App/>)
     
 
    // screen.debug(); // prints out the jsx in the App component unto the command line
    const welcomeAlert = screen.getByText(/Hey, nice to see you/i);
    // 3) non c'è interazione (utente) con metodi specifici

    // 4) verifica delle aspettative con dei metodi chiamati "matchers"
    expect(welcomeAlert).toBeInTheDocument();
    
  })
// **************************************2) cards*****************************************************
  it("tante bootstrap cards quanti sono i libri nel file json utilizzato", async () => {
    render(<App />);

    const numeroLibri = await screen.findAllByRole("card");

    // expect(listItems.length).toBeGreaterThan(0);
    expect(numeroLibri).toHaveLength(150);
  });

// ************************************3) CommentArea*******************************************************

  it(' CommentArea venga renderizzato correttamente', async () => {
    render(<App/>)
    const libri = await screen.findAllByRole("card");
    fireEvent.click(libri[0]);
    // screen.debug(); // prints out the jsx in the App component unto the command line
    const commentArea = screen.getByText(/Recensioni del libro/i);
    // 3) non c'è interazione (utente) con metodi specifici

    // 4) verifica delle aspettative con dei metodi chiamati "matchers"
    expect(commentArea).toBeInTheDocument();
    
  })

// ************************************4) Imput***************************************************************

  it("filtraggio dei libri tramite campo input", async () => {
    render(<App />);

    // const inputField = screen.getByRole("textbox");
    // const inputField = screen.getByPlaceholderText(/Cerca un utente per nome/i);
    const inputField = screen.getByTestId("filterInput");

    // fireEvent.change(inputField, { target: { value: "en" } });
    const user = userEvent.setup();

    await user.type(inputField, "sword");

    const filteredBookCards = await screen.findAllByRole("card");

    expect(filteredBookCards).toHaveLength(9);
  });

  // ************************************5) clicca su un libro*******************************************************

  it(' cliccando su un libro, il suo bordo cambi colore', async () => {
    render(<App/>)
    const libri = await screen.findAllByRole("card");
    fireEvent.click(libri[0]);
    

    // 4) verifica delle aspettative con dei metodi chiamati "matchers"
    expect(libri[0]).toHaveClass('bg-black');
    
  })
  // ************************************6) clicca su un altro libro*******************************************************

  it(' cliccando su un altro libro, toggle del bg color e bordo', async () => {
    render(<App/>)
    const libri = await screen.findAllByRole("card");
    fireEvent.click(libri[1]);
    

    // 4) verifica delle aspettative con dei metodi chiamati "matchers"
    expect(libri[0]).not.toHaveClass('bg-black');
    
  })


  // // *************** 8) recensioni all’interno del DOM *******************************************************

  it(' recensioni caricate correttamente all’interno del DOM', async () => {
    render(<App/>)
    const libri = await screen.findAllByRole("card");
    fireEvent.click(libri[1]);
    const comments = await screen.findAllByTestId("comment");
    
    expect(comments[0]).toBeInTheDOM();
   
    
  })
 
})