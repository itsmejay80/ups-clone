import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useTailwind } from "tailwind-rn";
import { Card, Icon } from "@rneui/themed";
import { Divider } from "@rneui/themed";
import MapView, { Marker } from "react-native-maps";

type Props = {
  order: Order;
  fullwidth?: boolean;
};

const DeliveryCard = ({ order, fullwidth }: Props) => {
  const tw = useTailwind();
  return (
    <Card
      containerStyle={[
        tw(`${fullwidth ? "rounded-none m-0" : "rounded-lg"}  my-2`),
        {
          backgroundColor: fullwidth ? "#EB6A7C" : "#59C1CC",
          padding: 0,
          paddingTop: 16,
          shadowColor: "black",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 4,
        },
      ]}
    >
      <View style={fullwidth && { height: "100%" }}>
        <Icon name="box" type="entypo" size={50} color="white" />

        <View style={tw("items-start p-5 -mt-3")}>
          <View style={tw("mx-auto")}>
            <Text
              style={[tw("text-xs text-center uppercase text-white font-bold")]}
            >
              {order.carrier} - {order.trackingId}
            </Text>
            <Text style={tw("text-white text-center text-lg font-bold")}>
              {" "}
              Expected Delivery:{" "}
              {new Date(order.createdAt).toLocaleDateString()}
            </Text>
            <Divider color="white" />
          </View>

          <View style={[tw("mx-auto pb-5")]}>
            <Text style={tw("text-base text-center text-white font-bold mt-5")}>
              Address
            </Text>
            <Text style={tw("text-sm text-center text-white ")}>
              {order.Address}, {order.City}
            </Text>
            <Text style={tw("text-sm text-center italic text-white")}>
              Shipping Cost: ${order.shippingCost}
            </Text>
          </View>
        </View>

        <Divider color="white" />

        <View style={tw("p-5")}>
          {order.trackingItems.items.map((item: Item) => (
            <View
              key={item.item_id}
              style={tw("flex-row justify-between items-center")}
            >
              <Text style={tw("text-sm italic text-white")}>{item.name}</Text>
              <Text style={tw("text-white text-xl")}>x {item.quantity}</Text>
            </View>
          ))}
        </View>

        <MapView
          initialRegion={{
            latitude: order.Lat,
            longitude: order.Lng,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
          style={[
            tw("w-full"),
            { flexGrow: 1 },
            !fullwidth ? { height: 200 } : { height: "100%" },
          ]}
        >
          {order.Lat && order.Lng && (
            <Marker
              coordinate={{
                latitude: order.Lat,
                longitude: order.Lng,
              }}
              title="Delivery Location"
              description={order.Address}
              identifier="destination"
            />
          )}
        </MapView>
      </View>
    </Card>
  );
};

export default DeliveryCard;

const styles = StyleSheet.create({});
