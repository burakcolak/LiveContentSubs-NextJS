import EmptyView from "@/components/Views/EmptyView";
import { getLastCompletedPaymentIntent } from "@/lib/services/PaymentService";
import { PaymentStatus } from "@/models/paymentStatus";
import Link from "next/link";

export default async function ResultPage({
  searchParams,
}: {
  searchParams: { payment_intent: string };
}): Promise<JSX.Element> {
  if (!searchParams.payment_intent) <EmptyView message="Payment not found" />;

  //wait 2 seconds to make sure the payment is completed
  //TODO: add loading component
  await new Promise((resolve) => setTimeout(resolve, 2000));
  const payment = await getLastCompletedPaymentIntent(
    searchParams.payment_intent
  );

  if (!payment) <EmptyView message="Payment not found" />;

  if (payment?.status === PaymentStatus.PaymentSuccess) {
    return (
      <section className="bg-gray-50 text-gray-800">
        <div className="container mx-auto flex flex-col items-center px-4 py-8 text-center md:py-16 md:px-10 lg:px-32 xl:max-w-3xl">
          <h1 className="text-4xl font-bold sm:text-5xl">Payment Succeeded!</h1>

          <div className="flex flex-wrap pt-16 justify-center">
            <Link
              href="/dashboard"
              className="px-8 py-3 m-2 text-lg font-semibold rounded bg-teal-600 text-gray-50"
            >
              Get started
            </Link>
            <Link
              href="/frequently-asked-questions"
              className="px-8 py-3 m-2 text-lg border rounded text-gray-900 border-gray-300"
            >
              Learn more
            </Link>
          </div>
        </div>
      </section>
    );
  }
  return <EmptyView message="Something went wrong" />;
}
