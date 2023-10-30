import EmptyView from "@/components/Box/EmptyView";
import { getLastPaymentIntent } from "@/lib/services/PaymentService";
import { PaymentStatus } from "@/models/paymentStatus";
import { PaymentType } from "@/models/paymentType";
import Link from "next/link";

export default async function ResultPage({
  searchParams,
}: {
  searchParams: { payment_intent: string };
}): Promise<JSX.Element> {
  if (!searchParams.payment_intent) <EmptyView message="Payment not found" />;

  const payment = await getLastPaymentIntent(searchParams.payment_intent);
  if (!payment) <EmptyView message="Payment not found" />;

  if (
    payment?.status === PaymentStatus.Completed &&
    payment?.type === PaymentType.PaymentCompleted
  ) {
    return (
      <section className="bg-gray-50 text-gray-800">
        <div className="container mx-auto flex flex-col items-center px-4 py-8 text-center md:py-16 md:px-10 lg:px-32 xl:max-w-3xl">
          <h1 className="text-4xl font-bold leadi sm:text-5xl">
            Payment Succeeded!
          </h1>

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
