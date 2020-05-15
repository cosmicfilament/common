export enum OrderStatus {
	// Order has been created, but the ticket it is
	// trying to order has not been reserved
	Created = 'created',
	// ticket has already been reserved or
	// the user has cancelled the order
	// or the order expires before payment
	Cancelled = 'cancelled',
	// order has successfully reserved the ticket
	AwaitingPayment = 'awaiting:payment',
	// order has reserved the ticket and the user
	// has provided payment successfully
	Complete = 'complete'
}
