export enum OrderStatus {
    WaitingForPaymentIntent = 0,
    PaymentIntent = 1,
    PaymentFailed = 2,
    PaymentCompleted = 3,
    MembershipCreated = 4,
    Refunded = 5,
    CancelledByMember = 6,
}

export const OrderStatusDisplayNames: { [key in OrderStatus]: string } = {
    [OrderStatus.WaitingForPaymentIntent]: "Waiting For Payment Intent",
    [OrderStatus.PaymentIntent]: "Payment Intent",
    [OrderStatus.PaymentFailed]: "Payment Failed",
    [OrderStatus.PaymentCompleted]: "Payment Completed",
    [OrderStatus.MembershipCreated]: "Order Completed",
    [OrderStatus.Refunded]: "Refunded",
    [OrderStatus.CancelledByMember]: "Cancelled by Member",
};

export function getOrderStatusDisplayName(status: OrderStatus): string {
    return OrderStatusDisplayNames[status];
}