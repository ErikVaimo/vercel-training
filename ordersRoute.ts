import { FastifyInstance, FastifyPluginOptions, FastifyPluginAsync } from 
'fastify';
import fp from 'fastify-plugin';
import data from "./data";


interface orderParams {
	id: string;
}
interface order {
	id: number,
	name: string
}
interface data {
	items: order[]
}
const orderData: data = data;

// @ts-ignore
const OrderRoute: FastifyPluginAsync = async (server: FastifyInstance,
options: FastifyPluginOptions) => {
	server.get('/orders', {}, async (request, reply) => {
			return reply.code(200).send(orderData.items)
	});

	server.get<{ Params: orderParams }>('/orders/:id', {}, async (request, reply) => {
		try {
			return reply.code(200).send(data.items.filter(item => item.id == request.params.id));
		} catch (error) {
			request.log.error(error);
			return reply.send(400);
		}
	});
};

export default fp(OrderRoute);

