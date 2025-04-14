import { resend } from "@/lib/resend";
import { schedules } from "@trigger.dev/sdk/v3";

export const SendMonthlyNewsLetter = schedules.task({
  id: "first-scheduled-task",
  cron: "0 9 1 * *",
  run: async (payload, { ctx }) => {
    console.log("Sending monthly newsletter...");

    // const subscribers = await db.subscribers.findMany({
    //   where: { isActive: true },
    //   select: { email: true },
    // });

    // for (const subscriber of subscribers) {
    //   await resend.emails.send({
    //     from: "teste@teste.com",
    //     to: subscriber.email,
    //     subject: "Novidades da Marcenaria",
    //     html: "<p>Confira nossos novos projetos!</p>",
    //   });
    //   console.log(`Newsletter sent to ${subscriber.email}`);
    // }

    return {
      status: "success",
      message: `Monthly newsletter sent to tal tal tal subscribers.`,
    };
  },
});
